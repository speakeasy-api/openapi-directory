import { ClusterAPI } from "./clusterapi";
import { GeocodingAPI } from "./geocodingapi";
import { IsochroneAPI } from "./isochroneapi";
import { MapMatchingAPI } from "./mapmatchingapi";
import { MatrixAPI } from "./matrixapi";
import * as shared from "./models/shared";
import { RouteOptimizationAPI } from "./routeoptimizationapi";
import { RoutingAPI } from "./routingapi";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://graphhopper.com/api/1"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 *
 * @remarks
 * With the [GraphHopper Directions API](https://www.graphhopper.com/products/) you can integrate A-to-B route planning, turn-by-turn navigation,
 * route optimization, isochrone calculations and other tools in your application.
 *
 * The GraphHopper Directions API consists of the following RESTful web services:
 *
 *  * [Routing API](#tag/Routing-API),
 *  * [Route Optimization API](#tag/Route-Optimization-API),
 *  * [Isochrone API](#tag/Isochrone-API),
 *  * [Map Matching API](#tag/Map-Matching-API),
 *  * [Matrix API](#tag/Matrix-API),
 *  * [Geocoding API](#tag/Geocoding-API) and
 *  * [Cluster API](#tag/Cluster-API).
 *
 * # Explore our APIs
 *
 * ## Get started
 *
 * 1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025)
 * 2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)
 *
 * Each API part has its own documentation. Jump to the desired API part and learn about the API through the given examples and tutorials.
 *
 * In addition, for each API there are specific sample requests that you can send via Insomnia or Postman to see what the requests and responses look like.
 *
 * ## Insomnia
 *
 * To explore our APIs with [Insomnia](https://insomnia.rest/), follow these steps:
 *
 * 1. Open Insomnia and Import [our workspace](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/GraphHopper-Direction-API-Insomnia.json).
 * 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your workspace: Manage Environments -> Base Environment -> `"api_key": your API key`
 * 3. Start exploring
 *
 * ![Insomnia](./img/insomnia.png)
 *
 * ## Postman
 *
 * To explore our APIs with [Postman](https://www.getpostman.com/), follow these steps:
 *
 * 1. Import our [request collections](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_collection.json) as well as our [environment file](https://raw.githubusercontent.com/graphhopper/directions-api-doc/master/web/restclients/graphhopper_directions_api.postman_environment.json).
 * 2. Specify [your API key](https://graphhopper.com/dashboard/#/register) in your environment: `"api_key": your API key`
 * 3. Start exploring
 *
 * ![Postman](./img/postman.png)
 *
 * ## API Client Libraries
 *
 * To speed up development and make coding easier, we offer the following client libraries:
 *
 *  * [JavaScript client](https://github.com/graphhopper/directions-api-js-client) - try the [live examples](https://graphhopper.com/api/1/examples/)
 *  * [Others](https://github.com/graphhopper/directions-api-clients) like C#, Ruby, PHP, Python, ... automatically created for the Route Optimization API
 *
 * ### Bandwidth reduction
 *
 * If you create your own client, make sure it supports http/2 and gzipped responses for best speed.
 *
 * If you use the Matrix, the Route Optimization API or the Cluster API and want to solve large problems, we recommend you to reduce bandwidth
 * by [compressing your POST request](https://gist.github.com/karussell/82851e303ea7b3459b2dea01f18949f4)
 * and specifying the header as follows: `Content-Encoding: gzip`. This will also avoid the HTTP 413 error "Request Entity Too Large".
 *
 * ## Contact Us
 *
 * If you have problems or questions, please read the following information:
 *
 * - [FAQ](https://graphhopper.com/api/1/docs/FAQ/)
 * - [Public forum](https://discuss.graphhopper.com/c/directions-api)
 * - [Contact us](https://www.graphhopper.com/contact-form/)
 * - [GraphHopper Status Page](https://status.graphhopper.com/)
 *
 * To stay informed about the latest developments, you can
 *
 * - follow us on [twitter](https://twitter.com/graphhopper/),
 * - read [our blog](https://graphhopper.com/blog/),
 * - watch [our documentation repository](https://github.com/graphhopper/directions-api-doc),
 * - sign up for our newsletter or
 * - [our forum](https://discuss.graphhopper.com/c/directions-api).
 *
 * Select the channel you like the most.
 *
 *
 * # Map Data and Routing Profiles
 *
 * Currently, our main data source is [OpenStreetMap](https://www.openstreetmap.org). We also integrated other network data providers.
 * This chapter gives an overview about the options you have.
 *
 * ## OpenStreetMap
 *
 * #### Geographical Coverage
 *
 * [OpenStreetMap](https://www.openstreetmap.org) covers the whole world. If you want to see for yourself if we can provide data suitable for your region,
 * please visit [GraphHopper Maps](https://graphhopper.com/maps/).
 * You can edit and modify OpenStreetMap data if you find that important information is missing, e.g. a weight limit for a bridge.
 * [Here](https://wiki.openstreetmap.org/wiki/Beginners%27_guide) is a beginner's guide that shows how to add data. If you have edited data, we usually consider your data after 1 week at the latest.
 *
 * #### Supported Vehicle Profiles
 *
 * The Routing, Matrix and Route Optimization APIs support the following vehicle profiles:
 *
 * Name       | Description           | Restrictions              | Icon
 * -----------|:----------------------|:--------------------------|:---------------------------------------------------------
 * car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png)
 * small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png)
 * truck      | Truck like a MAN or Mercedes-Benz Actros | height=3.7m, width=2.6+0.5m, length=12m, weight=13000 + 13000 kg, hgv=yes, 3 Axes | ![truck image](https://graphhopper.com/maps/img/truck.png)
 * scooter    | Moped mode | Fast inner city, often used for food delivery, is able to ignore certain bollards, maximum speed of roughly 50km/h | ![scooter image](https://graphhopper.com/maps/img/scooter.png)
 * foot       | Pedestrian or walking without dangerous [SAC-scales](https://wiki.openstreetmap.org/wiki/Key:sac_scale) | foot access         | ![foot image](https://graphhopper.com/maps/img/foot.png)
 * hike       | Pedestrian or walking with priority for more beautiful hiking tours and potentially a bit longer than `foot`. Walking duration is influenced by elevation differences.  | foot access         | ![hike image](https://graphhopper.com/maps/img/hike.png)
 * bike       | Trekking bike avoiding hills | bike access  | ![bike image](https://graphhopper.com/maps/img/bike.png)
 * mtb        | Mountainbike          | bike access         | ![Mountainbike image](https://graphhopper.com/maps/img/mtb.png)
 * racingbike| Bike preferring roads | bike access         | ![racingbike image](https://graphhopper.com/maps/img/racingbike.png)
 *
 * Please note:
 *
 *  * all motor vehicles (`car`, `small_truck`, `truck` and `scooter`) support turn restrictions via `turn_costs=true`
 *  * the free package supports only the vehicle profiles `car`, `bike` or `foot`
 *  * up to 2 different vehicle profiles can be used in a single optimization request. The number of vehicles is unaffected and depends on your subscription.
 *  * we offer custom vehicle profiles with different properties, different speed profiles or different access options. To find out more about custom profiles, please [contact us](https://www.graphhopper.com/contact-form/).
 *  * a sophisticated `motorcycle` profile is available up on request. It is powered by the [Kurviger](https://kurviger.de/en) Routing API and favors curves and slopes while avoiding cities and highways.
 *
 * ## TomTom
 *
 * If you want to include traffic, you can purchase the TomTom Add-on.
 * This Add-on only uses TomTom's road network and historical traffic information.
 * Live traffic is not yet considered. If you are interested to learn how we consider traffic information, we recommend that you read [this article](https://www.graphhopper.com/blog/2017/11/06/time-dependent-optimization/).
 *
 * Please note the following:
 *
 *  * Currently we only offer this for our [Route Optimization API](#tag/Route-Optimization-API).
 *  * In addition to our terms, you need to accept TomTom's [End User License Aggreement](https://www.graphhopper.com/tomtom-end-user-license-agreement/).
 *  * We do *not* use TomTom's web services. We only use their data with our software.
 *
 * [Contact us](https://www.graphhopper.com/contact-form/) for more details.
 *
 * #### Geographical Coverage
 *
 * We offer
 *
 * - Europe including Russia
 * - North, Central and South America
 * - Saudi Arabia
 * - United Arab Emirates
 * - South Africa
 * - Australia
 *
 * #### Supported Vehicle Profiles
 *
 * Name       | Description           | Restrictions              | Icon
 * -----------|:----------------------|:--------------------------|:---------------------------------------------------------
 * car        | Car mode              | car access                | ![car image](https://graphhopper.com/maps/img/car.png)
 * small_truck| Small truck like a Mercedes Sprinter, Ford Transit or Iveco Daily | height=2.7m, width=2+0.4m, length=5.5m, weight=2080+1400 kg | ![small truck image](https://graphhopper.com/maps/img/small_truck.png)
 *
 */
export declare class SDK {
    /**
     *
     * @remarks
     * ### Introduction
     *
     * ![Cluster Example](./img/cluster-solution.jpg)
     *
     * It solves the “capacity clustering problem” by assigning a set of customers to a given number of distinct groups (called clusters).
     * The API “clusters” by minimizing the total distance from each individual customer to its designated group median.
     * It can also consider minimum and maximum capacity restrictions for each group.
     *
     * Clustering can be used in many practical applications.
     * For example, it can help to plan territories, i.e. territory optimization for field teams with large territories for field workers,
     * or to solve large vehicle routing problems (VRP).
     *
     */
    clusterAPI: ClusterAPI;
    /**
     * Everything about geocoding
     */
    geocodingAPI: GeocodingAPI;
    /**
     * Everything about isochrones
     */
    isochroneAPI: IsochroneAPI;
    /**
     * Everything about map matching aka "snap to road"
     */
    mapMatchingAPI: MapMatchingAPI;
    /**
     *
     * @remarks
     * ### Introduction
     *
     * ![Matrix Example](./img/matrix-example.png)
     *
     * The Matrix API is part of the [GraphHopper Directions API](https://graphhopper.com/#directions-api) and with
     * it you can calculate many-to-many distances and times a lot more efficient than calling the
     * Routing API multiple times.
     *
     * In the [Routing API](#tag/Routing-API) we support multiple points, so called 'via points', which results in one
     * route being calculated. The Matrix API results in NxM routes, or more precise NxM distances or times being calculated
     * but [is a lot faster](https://www.graphhopper.com/blog/2019/06/04/incredibly-fast-distance-matrix-calculations-with-graphhopper/)
     * compared to NxM single requests.
     *
     * The most simple example is a tourist trying to decide
     * which pizza is close to her instead of using beeline distance she can calculate a 1x4 matrix. Or a delivery service
     * often in the need of big NxN matrices to solve vehicle routing problems. For example the [GraphHopper Route Optimization API](#tag/Route-Optimization-API)
     * uses the Matrix API under the hood to achieve this.
     *
     * Some other use cases for the Matrix API:
     *
     * * Logistic problems often pick up many items from and deliver them to many locations.
     * * Calculating detours with many possible points in-between and selecting the best e.g. interesting for ridesharing or taxi applications. For this 1-to-many requests are necessary.
     * * Finding the best tour for a tourist in the need to visit as many points of interests as possible.
     * * ...
     *
     * ### API Clients and Examples
     *
     * See the [clients](#section/API-Clients) section in the main document and [live examples](https://graphhopper.com/api/1/examples/#matrix).
     *
     * ### Description
     *
     * The Matrix API calculates the well known distance-matrix for a set of points, i.e. it calculates all the distances
     * between every point combination. But we do not stop there, we also offer a time-, weight- and route-matrix.
     * The weight-matrix can be used as raw input for e.g. a vehicle routing problem ([VRP](http://en.wikipedia.org/wiki/Vehicle_routing_problem))
     * and is more precise than a time- or distance-matrix. E.g. for bike routes the actual weight of a route (e.g. the "beauty")
     * is what you want to decide if a route is 'better' and not always the taken time or distance.
     *
     * A simple illustration for a 3x3 matrix with identical from and to points:
     *
     * -          |to_point1|to_point2|to_point3
     * :-----------|:--------|:--------|:--------
     * from_point1 |0        |1->2     | 1->3
     * from_point2 |2->1     |0        | 2->3
     * from_point3 |3->1     |3->2     | 0
     *
     * A simple illustration for a 1x3 matrix with different start- and end-points:
     *
     * -          | to_point1  | to_point2 | t_point3
     * :-----------|:-----------|:----------|:--------
     * from_pointA |A->1        |A->2       |A->3
     *
     *
     * For every route 1->2, 1-3, ... or A->1,A->2,A->3 you can return only the weight, the time and the distance.
     * To calculate full routes you can use the [Routing API](#tag/Routing-API).
     *
     * ### Limits and Counts
     *
     * The cost for one request depends on the number of locations and is documented [here](https://support.graphhopper.com/support/solutions/44000303787#what-is-one-credit).
     *
     * One request should not exceed the Matrix API location limit, which depends on the subscription, see the
     * pricing tab in our dashboard.
     *
     */
    matrixAPI: MatrixAPI;
    /**
     *
     * @remarks
     * ## Quickstart
     *
     * The Route Optimization API can be used to solve [traveling salesman](https://en.wikipedia.org/wiki/Travelling_salesman_problem) or [vehicle routing problems](https://en.wikipedia.org/wiki/Vehicle_routing_problem).
     * Solve your first problem by following these steps. If you already have a GraphHopper account, start with step 2.
     *
     * 1. [Sign up for GraphHopper](https://support.graphhopper.com/a/solutions/articles/44001976025)
     * 2. [Create an API key](https://support.graphhopper.com/a/solutions/articles/44001976027)
     * 3. Download [simple traveling salesman problem](https://gist.github.com/oblonski/fb2f2be534c3ebe7bebaa72151194182) and save it in a local folder
     * 4. Open your command line, go to that local folder and use cURL ([What is cURL?](https://de.wikipedia.org/wiki/CURL)) as follows:
     *
     *    ```
     *    curl -X POST -H "Content-Type: application/json"   "https://graphhopper.com/api/1/vrp?key=YOUR_CREATED_API_KEY" --data "@tsp.json"
     *    ```
     *
     * Alternatively, you can use our Editor to explore that API:
     *
     * 1. Login to your GraphHopper account
     * 2. Go to **Editor**
     * 3. Click the **Optimize** button to solve your first problem
     * 4. Analyze the solution on the **Map** or as raw **JSON Output**
     *
     * If you have successfully solved the first problem, we recommend this tutorial - [Getting Started with the Optimization API](https://www.graphhopper.com/blog/2019/05/17/getting-started-with-the-optimization-api-traveling-salesman-problem/).
     * It shows and describes the essential elements to model your vehicle routing problem.
     *
     * To explore the full specification, we recommend that you either use our [route editor](https://www.graphhopper.com/blog/2015/07/21/graphhoppers-new-route-optimization-editor/),
     * which you can find in our [dashboard](https://graphhopper.com/dashboard/),
     * or use a REST client such as Insomnia or Postman, as described [here](https://docs.graphhopper.com/#section/Explore-our-APIs/Insomnia).
     *
     * ## Tutorials
     *
     * We provide [a number of tutorials](https://www.graphhopper.com/tutorial/) illustrating how to use the Route Optimization API and
     * how to model your vehicle routing problems:
     *
     * - [Getting Start with the Optimization API - Traveling Salesman Problem](https://www.graphhopper.com/blog/2019/05/17/getting-started-with-the-optimization-api-traveling-salesman-problem/)
     * - [How to solve a traveling salesman problem with a week-planning horizon?](https://www.graphhopper.com/blog/2020/07/15/how-to-solve-a-traveling-salesman-problem-with-a-week-planning-horizon-and-driver-shifts/)
     * - [How to schedule technicians with skills and multiple dependencies between tasks?](https://www.graphhopper.com/blog/2016/06/03/how-to-route-technicians-with-skills-and-multiple-dependencies-between-tasks/)
     * - [What is the difference between the min. of completion time and min. transport time?](https://www.graphhopper.com/blog/2016/06/20/what-is-the-difference-between-the-minimization-of-completion-time-and-minimizing-transport-time/)
     * - [How to model multiple delivery routes with a single vehicle?](https://www.graphhopper.com/blog/2016/07/21/how-to-model-multiple-delivery-routes-with-a-single-vehicle/)
     *
     */
    routeOptimizationAPI: RouteOptimizationAPI;
    /**
     *
     * @remarks
     * ### Introduction
     *
     * ![Routing screenshot](./img/routing-example.png)
     *
     * The Routing API is part of the GraphHopper Directions API. Routing is the process of finding the best path connecting
     * two or more points, where the meaning of ''best'' depends on the vehicle and use case.
     *
     * ### Navigation
     * If you plan to use the Routing API for navigation, have a look at our [open source demo navigation application](https://github.com/graphhopper/graphhopper-navigation-example) and adapt it to your needs.
     *
     * ### Fast
     * To get started using this API, just provide two or more points and retrieve the fastest route through the road
     * network that connects them. This type of request is heavily optimized for query performance, so it does not
     * allow for some advanced features.
     * ### Flexible
     * Unlock further flexible features via `ch.disable=true`.
     *
     */
    routingAPI: RoutingAPI;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
