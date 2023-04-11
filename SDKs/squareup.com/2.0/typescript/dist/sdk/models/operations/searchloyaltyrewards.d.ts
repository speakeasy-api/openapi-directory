import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchLoyaltyRewardsSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class SearchLoyaltyRewardsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    searchLoyaltyRewardsResponse?: shared.SearchLoyaltyRewardsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
