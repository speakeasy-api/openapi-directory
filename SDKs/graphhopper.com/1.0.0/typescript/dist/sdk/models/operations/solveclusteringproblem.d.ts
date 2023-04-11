import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SolveClusteringProblemResponse extends SpeakeasyBase {
    /**
     * Error occurred when reading the request. Request is invalid.
     */
    badRequest?: shared.BadRequest;
    /**
     * A response containing the solution
     */
    clusterResponse?: shared.ClusterResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Error occurred on server side.
     */
    internalErrorMessage?: shared.InternalErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
