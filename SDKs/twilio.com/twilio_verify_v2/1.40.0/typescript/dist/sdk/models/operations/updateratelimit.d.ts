import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRateLimitServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateRateLimitSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRateLimitUpdateRateLimitRequest extends SpeakeasyBase {
    /**
     * Description of this Rate Limit
     */
    description?: string;
}
export declare class UpdateRateLimitRequest extends SpeakeasyBase {
    requestBody?: UpdateRateLimitUpdateRateLimitRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch.
     */
    sid: string;
}
export declare class UpdateRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
