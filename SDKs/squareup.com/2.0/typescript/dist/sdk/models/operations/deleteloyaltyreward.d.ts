import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteLoyaltyRewardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteLoyaltyRewardRequest extends SpeakeasyBase {
    /**
     * The ID of the [loyalty reward](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyReward) to delete.
     */
    rewardId: string;
}
export declare class DeleteLoyaltyRewardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteLoyaltyRewardResponse?: shared.DeleteLoyaltyRewardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
