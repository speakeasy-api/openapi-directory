import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveLoyaltyRewardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class RetrieveLoyaltyRewardRequest extends SpeakeasyBase {
    /**
     * The ID of the [loyalty reward](https://developer.squareup.com/reference/square_2021-08-18/objects/LoyaltyReward) to retrieve.
     */
    rewardId: string;
}
export declare class RetrieveLoyaltyRewardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    retrieveLoyaltyRewardResponse?: shared.RetrieveLoyaltyRewardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
