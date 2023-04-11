import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { LoyaltyEvent } from "./loyaltyevent";
/**
 * A response that includes the `LoyaltyEvent` published for redeeming the reward.
 */
export declare class RedeemLoyaltyRewardResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Provides information about a loyalty event.
     *
     * @remarks
     * For more information, see [Loyalty events](https://developer.squareup.com/docs/loyalty-api/overview/#loyalty-events).
     */
    event?: LoyaltyEvent;
}
