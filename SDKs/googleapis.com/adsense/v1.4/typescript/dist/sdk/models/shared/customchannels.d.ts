import { SpeakeasyBase } from "../../../internal/utils";
import { CustomChannel } from "./customchannel";
/**
 * Successful response
 */
export declare class CustomChannels extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The custom channels returned in this list response.
     */
    items?: CustomChannel[];
    /**
     * Kind of list this is, in this case adsense#customChannels.
     */
    kind?: string;
    /**
     * Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
}
