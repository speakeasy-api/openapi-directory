import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
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
export declare class ClusterAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Batch Cluster Endpoint
     *
     * @remarks
     *
     * Prefer the [synchronous endpoint](#operation/solveClusteringProblem) and use this Batch Cluster endpoint for
     * long running problems only. The work flow is asynchronous:
     *
     * - send a POST request towards `https://graphhopper.com/api/1/cluster/calculate?key=<your_key>` and fetch the job_id.
     * - poll the solution every 500ms until it gives `status=finished`. Do this with a GET request
     *   towards `https://graphhopper.com/api/1/cluster/solution/<job_id>?key=<your_key>`.
     *
     */
    asyncClusteringProblem(req: shared.ClusterRequest, config?: AxiosRequestConfig): Promise<operations.AsyncClusteringProblemResponse>;
    /**
     * GET Batch Solution Endpoint
     *
     * @remarks
     * This endpoint returns the solution of the clustering problems submitted to the [Batch Cluster endpoint](#operation/asyncClusteringProblem).
     * You can fetch it with the job_id, you have been sent.
     *
     */
    getClusterSolution(req: operations.GetClusterSolutionRequest, config?: AxiosRequestConfig): Promise<operations.GetClusterSolutionResponse>;
    /**
     * POST Cluster Endpoint
     *
     * @remarks
     *
     * The Cluster endpoint is used with a POST request towards
     * `https://graphhopper.com/api/1/cluster?key=<your_key>`. The solution will be provided in the JSON response.
     * Please note that for problems that take longer than 10 seconds a bad request error is returned.
     * In this case please use the asynchronous [Batch Cluster Endpoint](#operation/asyncClusteringProblem) instead.
     *
     */
    solveClusteringProblem(req: shared.ClusterRequest, config?: AxiosRequestConfig): Promise<operations.SolveClusteringProblemResponse>;
}
