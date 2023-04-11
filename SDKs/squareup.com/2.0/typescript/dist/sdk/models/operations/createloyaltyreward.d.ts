import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateLoyaltyRewardSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class CreateLoyaltyRewardResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLoyaltyRewardResponse?: shared.CreateLoyaltyRewardResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
