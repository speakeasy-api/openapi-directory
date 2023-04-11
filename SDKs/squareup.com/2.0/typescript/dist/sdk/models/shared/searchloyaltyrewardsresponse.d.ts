import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyReward } from "./loyaltyreward";
/**
 * A response that includes the loyalty rewards satisfying the search criteria.
 */
export declare class SearchLoyaltyRewardsResponse extends SpeakeasyBase {
    /**
     * The pagination cursor to be used in a subsequent
     *
     * @remarks
     * request. If empty, this is the final response.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * The loyalty rewards that satisfy the search criteria.
     *
     * @remarks
     * These are returned in descending order by `updated_at`.
     */
    rewards?: LoyaltyReward[];
}
