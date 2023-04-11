import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
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
export declare class RouteOptimizationAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * POST route optimization problem (batch mode)
     *
     * @remarks
     *
     * To solve a vehicle routing problem, perform the following steps:
     *
     * 1.) Make a HTTP POST to this URL
     *
     * ```
     * https://graphhopper.com/api/1/vrp/optimize?key=<your_key>
     * ```
     *
     * It returns a job id (job_id).
     *
     * 2.) Take the job id and fetch the solution for the vehicle routing problem from this URL:
     *
     * ```
     * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
     * ```
     *
     * We recommend to query the solution every 500ms until it returns 'status=finished'.
     *
     * **Note**: Since the workflow is a bit more cumbersome and since you lose some time in fetching the solution, you should always prefer
     * the [synchronous endpoint](#operation/solveVRP). You should use the batch mode only for long running problems.
     *
     */
    asyncVRP(req: shared.Request, config?: AxiosRequestConfig): Promise<operations.AsyncVRPResponse>;
    /**
     * GET the solution (batch mode)
     *
     * @remarks
     *
     * Take the job id and fetch the solution for the vehicle routing problem from this URL:
     *
     * ```
     * https://graphhopper.com/api/1/vrp/solution/<job_id>?key=<your_key>
     * ```
     *
     * You get the job id by sending a vehicle routing problem to the [batch mode URL](#operation/asyncVRP).
     *
     */
    getSolution(req: operations.GetSolutionRequest, config?: AxiosRequestConfig): Promise<operations.GetSolutionResponse>;
    /**
     * POST route optimization problem
     *
     * @remarks
     *
     * To get started with the Route Optimization API, please read the [introduction](#tag/Route-Optimization-API).
     *
     * To solve a new vehicle routing problem, make a HTTP POST to this URL
     *
     * ```
     * https://graphhopper.com/api/1/vrp?key=<your_key>
     * ```
     *
     * It returns the solution to this problem in the JSON response.
     *
     * Please note that this URL is very well suited to solve minor problems.
     * Larger vehicle routing problems, which take longer than 10 seconds to solve, cannot be solved.
     * To solve them, please use the [batch mode URL](#operation/asyncVRP) instead.
     *
     */
    solveVRP(req: shared.Request, config?: AxiosRequestConfig): Promise<operations.SolveVRPResponse>;
}
