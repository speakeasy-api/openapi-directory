import { SpeakeasyBase } from "../../../internal/utils";
import { Ad } from "./ad";
/**
 * Ad List Response
 */
export declare class AdsListResponse extends SpeakeasyBase {
    /**
     * Ad collection.
     */
    ads?: Ad[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#adsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
