import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRatePlanServerList: readonly ["https://wireless.twilio.com"];
export declare class FetchRatePlanSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRatePlanRequest extends SpeakeasyBase {
    /**
     * The SID of the RatePlan resource to fetch.
     */
    sid: string;
}
export declare class FetchRatePlanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    wirelessV1RatePlan?: shared.WirelessV1RatePlan;
}
