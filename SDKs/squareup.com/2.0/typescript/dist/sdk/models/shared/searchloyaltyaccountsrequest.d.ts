import { SpeakeasyBase } from "../../../internal/utils";
import { SearchLoyaltyAccountsRequestLoyaltyAccountQuery } from "./searchloyaltyaccountsrequestloyaltyaccountquery";
/**
 * A request to search for loyalty accounts.
 */
export declare class SearchLoyaltyAccountsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to
     *
     * @remarks
     * this endpoint. Provide this to retrieve the next set of
     * results for the original query.
     *
     * For more information,
     * see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of results to include in the response.
     */
    limit?: number;
    /**
     * The search criteria for the loyalty accounts.
     */
    query?: SearchLoyaltyAccountsRequestLoyaltyAccountQuery;
}
