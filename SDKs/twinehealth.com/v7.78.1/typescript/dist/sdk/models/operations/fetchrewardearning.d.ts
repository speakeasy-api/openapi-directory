import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRewardEarningRequest extends SpeakeasyBase {
    /**
     * Reward earning identifier
     */
    id: string;
}
export declare class FetchRewardEarningResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchRewardEarningResponse?: shared.FetchRewardEarningResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
