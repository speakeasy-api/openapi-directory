import { SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatus } from "./datafeedstatus";
/**
 * Successful response
 */
export declare class DatafeedstatusesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of datafeed statuses.
     */
    nextPageToken?: string;
    resources?: DatafeedStatus[];
}
