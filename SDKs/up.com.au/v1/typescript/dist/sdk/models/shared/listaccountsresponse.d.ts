import { SpeakeasyBase } from "../../../internal/utils";
import { AccountResource } from "./accountresource";
export declare class ListAccountsResponseLinks extends SpeakeasyBase {
    /**
     * The link to the next page in the results. If this value is `null`
     *
     * @remarks
     * there is no next page.
     *
     */
    next: string;
    /**
     * The link to the previous page in the results. If this value is `null`
     *
     * @remarks
     * there is no previous page.
     *
     */
    prev: string;
}
/**
 * Successful response to get all accounts. This returns a paginated list of
 *
 * @remarks
 * accounts, which can be scrolled by following the `prev` and `next` links
 * if present.
 *
 */
export declare class ListAccountsResponse extends SpeakeasyBase {
    /**
     * The list of accounts returned in this response.
     *
     * @remarks
     *
     */
    data: AccountResource[];
    links: ListAccountsResponseLinks;
}
