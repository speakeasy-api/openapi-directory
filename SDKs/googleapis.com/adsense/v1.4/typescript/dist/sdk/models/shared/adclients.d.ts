import { SpeakeasyBase } from "../../../internal/utils";
import { AdClient } from "./adclient";
/**
 * Successful response
 */
export declare class AdClients extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The ad clients returned in this list response.
     */
    items?: AdClient[];
    /**
     * Kind of list this is, in this case adsense#adClients.
     */
    kind?: string;
    /**
     * Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
}
