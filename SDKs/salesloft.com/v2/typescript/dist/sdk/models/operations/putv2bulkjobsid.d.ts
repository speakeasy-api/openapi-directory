import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2BulkJobsIdRequestBody extends SpeakeasyBase {
    /**
     * Name for your bulk job
     */
    name?: string;
    /**
     * Whether the job is ready to be executed. Must be true or false.
     */
    readyToExecute?: boolean;
}
export declare class PutV2BulkJobsIdRequest extends SpeakeasyBase {
    requestBody?: PutV2BulkJobsIdRequestBody;
    /**
     * The id for the bulk job to which the job data relates
     */
    id: number;
}
export declare class PutV2BulkJobsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
