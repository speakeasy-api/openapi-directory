import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBatchJobStatusRequest extends SpeakeasyBase {
    /**
     * The version of the api to target. Omit or set as &apos;default&apos; to target the current api version.
     */
    apiVersion: string;
    /**
     * The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete.
     */
    authorization: string;
    /**
     * The job unique identifier.
     */
    jobId: string;
}
export declare class GetBatchJobStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorModel?: shared.ErrorModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
