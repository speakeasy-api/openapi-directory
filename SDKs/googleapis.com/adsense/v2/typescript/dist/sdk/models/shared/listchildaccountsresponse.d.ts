import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Response definition for the child account list rpc.
 */
export declare class ListChildAccountsResponse extends SpeakeasyBase {
    /**
     * The accounts returned in this list response.
     */
    accounts?: Account[];
    /**
     * Continuation token used to page through accounts. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string;
}
