import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Successful response
 */
export declare class Accounts extends SpeakeasyBase {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;
    /**
     * The accounts returned in this list response.
     */
    items?: Account[];
    /**
     * Kind of list this is, in this case adsense#accounts.
     */
    kind?: string;
    /**
     * Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
}
