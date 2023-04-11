import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClusterSolutionRequest extends SpeakeasyBase {
    /**
     * Request solution with jobId
     */
    jobId: string;
}
/**
 * Requested solution could not be found.
 */
export declare class GetClusterSolution404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    message?: string;
    /**
     * status
     */
    status?: string;
}
export declare class GetClusterSolutionResponse extends SpeakeasyBase {
    /**
     * Error occurred on client side such as invalid input.
     */
    badRequest?: shared.BadRequest;
    /**
     * A response containing the solution
     */
    clusterResponse?: shared.ClusterResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requested solution could not be found.
     */
    getClusterSolution404ApplicationJSONObject?: GetClusterSolution404ApplicationJSON;
}
