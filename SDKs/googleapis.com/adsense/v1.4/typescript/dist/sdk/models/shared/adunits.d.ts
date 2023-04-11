import { SpeakeasyBase } from "../../../internal/utils";
import { AdUnit } from "./adunit";
/**
 * Successful response
 */
export declare class AdUnits extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ad units returned in this list response.
     */
    items?: AdUnit[];
    /**
     * Kind of list this is, in this case adsense#adUnits.
     */
    kind?: string;
    /**
     * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
}
