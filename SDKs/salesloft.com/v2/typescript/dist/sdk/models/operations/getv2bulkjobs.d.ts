import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2BulkJobsRequest extends SpeakeasyBase {
    /**
     * Filter by id using comparison operators. Only supports greater than (gt) comparison (i.e. id[gt]=123)
     */
    id?: Record<string, any>;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * The state of the bulk job. Accepts multiple states. Each state must be one of: open, executing, done
     */
    state?: string[];
}
export declare class GetV2BulkJobsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
