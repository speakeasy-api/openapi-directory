import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FetchRewardEarningsRequest extends SpeakeasyBase {
    /**
     * Group identifiers
     */
    filterGroups: string;
    /**
     * Patient identifier
     */
    filterPatient: string;
    /**
     * If true, only returns those reward earnings for which ready_for_fulfillment is true and fulfilled_at is null. If false, only returns those reward earnings for which ready_for_fulfillment is false and fulfilled_at is null.
     */
    filterReadyForFulfillment?: boolean;
}
export declare class FetchRewardEarningsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    fetchErrorResponse?: shared.FetchErrorResponse;
    /**
     * OK
     */
    fetchRewardEarningsResponse?: shared.FetchRewardEarningsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
