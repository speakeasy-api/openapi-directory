import { SpeakeasyBase } from "../../../internal/utils";
import { SavedAdStyle } from "./savedadstyle";
/**
 * Successful response
 */
export declare class SavedAdStyles extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The saved ad styles returned in this list response.
     */
    items?: SavedAdStyle[];
    /**
     * Kind of list this is, in this case adsense#savedAdStyles.
     */
    kind?: string;
    /**
     * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
}
