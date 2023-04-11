import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2BulkJobsBulkJobsIdResultsRequest extends SpeakeasyBase {
    /**
     * The id for the Bulk Job
     */
    bulkJobsId: number;
    /**
     * Filter by id using comparison operators. Only supports greater than (gt) comparison (i.e. id[gt]=123)
     */
    id?: Record<string, any>;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * Filter by result status. Accepts multiple statuses. Each status must be one of pending, success, error, retrying
     */
    status?: string[];
}
export declare class GetV2BulkJobsBulkJobsIdResultsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
