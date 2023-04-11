import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRewardEarningFulfillmentRequest extends SpeakeasyBase {
    /**
     * Reward earning fulfillment identifier
     */
    id: string;
}
export declare class FetchRewardEarningFulfillmentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchRewardEarningFulfillmentResponse?: shared.FetchRewardEarningFulfillmentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
