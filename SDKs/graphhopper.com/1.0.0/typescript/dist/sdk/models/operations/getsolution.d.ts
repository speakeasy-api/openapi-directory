import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSolutionRequest extends SpeakeasyBase {
    /**
     * Request solution with jobId
     */
    jobId: string;
}
/**
 * Requested solution could not be found.
 */
export declare class GetSolution404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error message
     */
    message?: string;
    /**
     * status
     */
    status?: string;
}
export declare class GetSolutionResponse extends SpeakeasyBase {
    /**
     * Error occurred on client side such as invalid input.
     */
    badRequest?: shared.BadRequest;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * A response containing the solution
     */
    response?: shared.Response;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requested solution could not be found.
     */
    getSolution404ApplicationJSONObject?: GetSolution404ApplicationJSON;
}
