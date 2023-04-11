import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AsyncVRPResponse extends SpeakeasyBase {
    /**
     * Error occurred when reading client request. Request is invalid.
     */
    badRequest?: shared.BadRequest;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Error occurred on server side.
     */
    internalErrorMessage?: shared.InternalErrorMessage;
    /**
     * A jobId you can use to retrieve your solution from the server - see solution endpoint.
     */
    jobId?: shared.JobId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
