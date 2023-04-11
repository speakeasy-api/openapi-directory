import { SpeakeasyBase } from "../../../internal/utils";
import { UrlChannel } from "./urlchannel";
/**
 * Successful response
 */
export declare class UrlChannels extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The URL channels returned in this list response.
     */
    items?: UrlChannel[];
    /**
     * Kind of list this is, in this case adsensehost#urlChannels.
     */
    kind?: string;
    /**
     * Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
}
