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
     * Kind of list this is, in this case adsensehost#accounts.
     */
    kind?: string;
}
