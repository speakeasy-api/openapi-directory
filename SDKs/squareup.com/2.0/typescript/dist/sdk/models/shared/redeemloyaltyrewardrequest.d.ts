import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A request to redeem a loyalty reward.
 */
export declare class RedeemLoyaltyRewardRequest extends SpeakeasyBase {
    /**
     * A unique string that identifies this `RedeemLoyaltyReward` request.
     *
     * @remarks
     * Keys can be any valid string, but must be unique for every request.
     */
    idempotencyKey: string;
    /**
     * The ID of the [location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) where the reward is redeemed.
     */
    locationId: string;
}
