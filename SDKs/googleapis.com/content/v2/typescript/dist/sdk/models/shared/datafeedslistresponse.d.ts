import { SpeakeasyBase } from "../../../internal/utils";
import { Datafeed } from "./datafeed";
/**
 * Successful response
 */
export declare class DatafeedsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse".
     */
    kind?: string;
    /**
     * The token for the retrieval of the next page of datafeeds.
     */
    nextPageToken?: string;
    resources?: Datafeed[];
}
