import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SolveVRPResponse extends SpeakeasyBase {
    /**
     * Error occurred when reading the request. Request is invalid.
     */
    badRequest?: shared.BadRequest;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Error occurred on server side.
     */
    internalErrorMessage?: shared.InternalErrorMessage;
    /**
     * A response containing the solution
     */
    response?: shared.Response;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
