import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2BulkJobsBulkJobsIdJobDataRequestBody extends SpeakeasyBase {
    /**
     * Array of objects containing parameters to be used to execute an instance of each. Array must be 5,000 records or less.
     */
    data: string[];
}
export declare class PostV2BulkJobsBulkJobsIdJobDataRequest extends SpeakeasyBase {
    requestBody: PostV2BulkJobsBulkJobsIdJobDataRequestBody;
    /**
     * The id for the bulk job to which the job data relates
     */
    bulkJobsId: number;
}
export declare class PostV2BulkJobsBulkJobsIdJobDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
