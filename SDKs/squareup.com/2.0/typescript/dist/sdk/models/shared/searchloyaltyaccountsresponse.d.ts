import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyAccount } from "./loyaltyaccount";
/**
 * A response that includes loyalty accounts that satisfy the search criteria.
 */
export declare class SearchLoyaltyAccountsResponse extends SpeakeasyBase {
    /**
     * The pagination cursor to use in a subsequent
     *
     * @remarks
     * request. If empty, this is the final response.
     * For more information,
     * see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The loyalty accounts that met the search criteria,
     *
     * @remarks
     * in order of creation date.
     */
    loyaltyAccounts?: LoyaltyAccount[];
}
