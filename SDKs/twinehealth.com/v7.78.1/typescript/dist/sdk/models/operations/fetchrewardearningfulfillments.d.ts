import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRewardEarningFulfillmentsRequest extends SpeakeasyBase {
    /**
     * Patient identifier
     */
    filterPatient: string;
}
export declare class FetchRewardEarningFulfillmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchRewardEarningFulfillmentsResponse?: shared.FetchRewardEarningFulfillmentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
