import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing:
 *
 * @remarks
 * With `alternative_route`, we give you not one but several routes that are close to optimal, but
 * not too similar to each other.
 * With `round_trip`, the route will get you back to where you started. This is meant for fun (think of
 * a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`.
 * You can control both of these features with additional parameters, see below.
 *
 */
export declare enum GetRouteAlgorithmEnum {
    RoundTrip = "round_trip",
    AlternativeRoute = "alternative_route"
}
export declare enum GetRouteCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}
export declare class GetRouteRequest extends SpeakeasyBase {
    /**
     * Rather than looking for the shortest or fastest path, this parameter lets you solve two different problems related to routing:
     *
     * @remarks
     * With `alternative_route`, we give you not one but several routes that are close to optimal, but
     * not too similar to each other.
     * With `round_trip`, the route will get you back to where you started. This is meant for fun (think of
     * a bike trip), so we will add some randomness. The `round_trip` option requires `ch.disable=true`.
     * You can control both of these features with additional parameters, see below.
     *
     */
    algorithm?: GetRouteAlgorithmEnum;
    /**
     * If `algorithm=alternative_route`, this parameter sets the number of maximum paths which should be calculated. Increasing can lead to worse alternatives.
     *
     * @remarks
     *
     */
    alternativeRouteMaxPaths?: number;
    /**
     * If `algorithm=alternative_route`, this parameter specifies how similar an alternative route can be to the optimal route. Increasing can lead to worse alternatives.
     *
     * @remarks
     *
     */
    alternativeRouteMaxShareFactor?: number;
    /**
     * If `algorithm=alternative_route`, this parameter sets the factor by which the alternatives routes can be longer than the optimal route. Increasing can lead to worse alternatives.
     *
     * @remarks
     *
     */
    alternativeRouteMaxWeightFactor?: number;
    /**
     * Specify which road classes and environments you would like to avoid.
     *
     * @remarks
     * Possible values are `motorway`, `steps`, `track`, `toll`, `ferry`, `tunnel` and `bridge`.
     * Separate several values with `;`. Obviously not all the values make sense for all vehicle profiles e.g. `bike` is already forbidden on a `motorway`. Requires `ch.disable=true`.
     *
     */
    avoid?: string;
    /**
     * Block road access by specifying a point close to the road segment to be blocked, with the format `lat,lon`.
     *
     * @remarks
     * You can also block all road segments crossing a geometric shape. Specify a circle using the format `lat,lon,radius`, or a polygon using the format `lat1,lon1,lat2,lon2,...,latN,lonN`.
     * You can specify several shapes, separating them with `;`. Requires `ch.disable=true`.
     *
     */
    blockArea?: string;
    /**
     * If the points for the route should be calculated at all.
     *
     * @remarks
     *
     */
    calcPoints?: boolean;
    /**
     * Use this parameter in combination with one or more parameters from below.
     *
     * @remarks
     *
     */
    chDisable?: boolean;
    /**
     * Optional parameter. It specifies on which side a point should be relative to the driver when she leaves/arrives at a start/target/via point. You need to specify this parameter for either none or all points. Only supported for motor vehicles and OpenStreetMap.
     *
     * @remarks
     *
     */
    curbside?: GetRouteCurbsideEnum[];
    /**
     * If `true`, the output will be formatted.
     *
     * @remarks
     *
     */
    debug?: boolean;
    /**
     * Optional parameter to retrieve path details. You can request additional details for the route: `street_name`,
     *
     * @remarks
     * `time`, `distance`, `max_speed`, `toll`, `road_class`, `road_class_link`, `road_access`, `road_environment`, `lanes`, and `surface`. Read more about the usage of path details [here](https://discuss.graphhopper.com/t/2539).
     *
     */
    details?: string[];
    /**
     * If `true`, a third coordinate, the altitude, is included with all positions in the response.
     *
     * @remarks
     * This changes the format of the `points` and `snapped_waypoints` fields of the response, in both their
     * encodings. Unless you switch off the `points_encoded` parameter, you need special code on the
     * client side that can handle three-dimensional coordinates.
     * A request can fail if the vehicle profile does not support elevation. See the features object for every vehicle profile.
     *
     */
    elevation?: boolean;
    /**
     * Favour a heading direction for a certain point. Specify either one heading for the start point or as many as there are points.
     *
     * @remarks
     * In this case headings are associated by their order to the specific points. Headings are given as north based clockwise angle between 0 and 360 degree.
     * This parameter also influences the tour generated with `algorithm=round_trip` and forces the initial direction.  Requires `ch.disable=true`.
     *
     */
    heading?: number[];
    /**
     * Time penalty in seconds for not obeying a specified heading. Requires `ch.disable=true`.
     *
     * @remarks
     *
     */
    headingPenalty?: number;
    /**
     * If instructions should be calculated and returned
     *
     * @remarks
     *
     */
    instructions?: boolean;
    /**
     * The locale of the resulting turn instructions. E.g. `pt_PT` for Portuguese or `de` for German.
     *
     * @remarks
     *
     */
    locale?: string;
    /**
     * Normally, the calculated route will visit the points in the order you specified them.
     *
     * @remarks
     * If you have more than two points, you can set this parameter to `"true"` and the points may be re-ordered to minimize the total travel time.
     * Keep in mind that the limits on the number of locations of the Route Optimization API applies, and the request costs more credits.
     *
     */
    optimize?: string;
    /**
     * If `true`, u-turns are avoided at via-points with regard to the `heading_penalty`. Requires `ch.disable=true`.
     *
     * @remarks
     *
     */
    passThrough?: boolean;
    /**
     * The points for which the route should be calculated. Format: `[latitude,longitude]`. Specify at least an origin and a destination. Via points are possible.
     *
     * @remarks
     * The maximum number depends on your plan.
     *
     */
    point: string[];
    /**
     * The `point_hint` is typically a road name to which the associated `point` parameter should be snapped to. Specify no `point_hint` parameter or the same number as you have `point` parameters.
     *
     * @remarks
     *
     */
    pointHint?: string[];
    /**
     * Allows changing the encoding of location data in the response. The default is polyline encoding, which is compact
     *
     * @remarks
     * but requires special client code to unpack. (We provide it in our JavaScript client library!)
     * Set this parameter to `false` to switch the encoding to simple coordinate pairs like `[lon,lat]`, or `[lon,lat,elevation]`.
     * See the description of the response format for more information.
     *
     */
    pointsEncoded?: boolean;
    /**
     * If `algorithm=round_trip`, this parameter configures approximative length of the resulting round trip. Requires `ch.disable=true`.
     *
     * @remarks
     *
     */
    roundTripDistance?: number;
    /**
     * If `algorithm=round_trip`, this sets the random seed. Change this to get a different tour for each value.
     *
     * @remarks
     *
     */
    roundTripSeed?: number;
    /**
     * Optional parameter to avoid snapping to a certain road class or road environment. Currently supported values are `motorway`, `trunk`, `ferry`, `tunnel`, `bridge` and `ford`. Multiple values are specified like `snap_prevention=ferry&snap_prevention=motorway`.
     *
     * @remarks
     *
     */
    snapPrevention?: string[];
    /**
     * Specifies if turn restrictions should be considered. Enabling this option increases the route computation time. Only supported for motor vehicles and OpenStreetMap.
     *
     * @remarks
     *
     */
    turnCosts?: boolean;
    /**
     * The vehicle profile for which the route should be calculated.
     *
     * @remarks
     *
     */
    vehicle?: shared.VehicleProfileIdEnum;
    /**
     * Determines the way the "best" route is calculated. Besides `fastest` you can use `short_fastest` which finds a reasonable balance between the distance influence (`shortest`) and the time (`fastest`). You could also use `shortest` but is deprecated and not recommended for motor vehicles. All except `fastest` require `ch.disable=true`.
     *
     * @remarks
     *
     */
    weighting?: string;
}
export declare class GetRouteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Your request is not valid. For example, you specified too few or too many points.
     */
    ghError?: shared.GHError;
    headers?: Record<string, string[]>;
    /**
     * Routing Result
     */
    routeResponse?: shared.RouteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
