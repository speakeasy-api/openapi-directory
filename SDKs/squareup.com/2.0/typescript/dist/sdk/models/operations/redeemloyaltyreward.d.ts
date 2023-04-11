import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RedeemLoyaltyRewardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RedeemLoyaltyRewardRequest extends SpeakeasyBase {
    /**
     * An object containing the fields to POST for the request.
     *
     * @remarks
     *
     * See the corresponding object definition for field details.
     */
    redeemLoyaltyRewardRequest: shared.RedeemLoyaltyRewardRequest;
    /**
     * The ID of the [loyalty reward](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyReward) to redeem.
     */
    rewardId: string;
}
export declare class RedeemLoyaltyRewardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    redeemLoyaltyRewardResponse?: shared.RedeemLoyaltyRewardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
