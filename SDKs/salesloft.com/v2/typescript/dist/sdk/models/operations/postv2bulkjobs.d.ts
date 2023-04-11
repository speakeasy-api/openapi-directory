import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2BulkJobsRequestBody extends SpeakeasyBase {
    /**
     * Name for your bulk job
     */
    name?: string;
    /**
     * Type of bulk job. Must be a valid type. Follow link to the bulk job details page above to view supported types.
     */
    type: string;
}
export declare class PostV2BulkJobsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
