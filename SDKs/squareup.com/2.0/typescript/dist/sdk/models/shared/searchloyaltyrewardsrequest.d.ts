import { SpeakeasyBase } from "../../../internal/utils";
import { SearchLoyaltyRewardsRequestLoyaltyRewardQuery } from "./searchloyaltyrewardsrequestloyaltyrewardquery";
/**
 * A request to search for loyalty rewards.
 */
export declare class SearchLoyaltyRewardsRequest extends SpeakeasyBase {
    /**
     * A pagination cursor returned by a previous call to
     *
     * @remarks
     * this endpoint. Provide this to retrieve the next set of
     * results for the original query.
     * For more information,
     * see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of results to return in the response.
     */
    limit?: number;
    /**
     * The set of search requirements.
     */
    query?: SearchLoyaltyRewardsRequestLoyaltyRewardQuery;
}
