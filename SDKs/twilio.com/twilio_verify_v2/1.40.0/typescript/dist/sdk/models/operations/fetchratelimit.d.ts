import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRateLimitServerList: readonly ["https://verify.twilio.com"];
export declare class FetchRateLimitSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRateLimitRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch.
     */
    sid: string;
}
export declare class FetchRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
