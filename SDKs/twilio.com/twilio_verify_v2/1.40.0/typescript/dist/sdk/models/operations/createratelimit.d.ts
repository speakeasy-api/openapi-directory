import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateRateLimitServerList: readonly ["https://verify.twilio.com"];
export declare class CreateRateLimitSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateRateLimitCreateRateLimitRequest extends SpeakeasyBase {
    /**
     * Description of this Rate Limit
     */
    description?: string;
    /**
     * Provides a unique and addressable name to be assigned to this Rate Limit, assigned by the developer, to be optionally used in addition to SID. **This value should not contain PII.**
     */
    uniqueName: string;
}
export declare class CreateRateLimitRequest extends SpeakeasyBase {
    requestBody?: CreateRateLimitCreateRateLimitRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid: string;
}
export declare class CreateRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    verifyV2ServiceRateLimit?: shared.VerifyV2ServiceRateLimit;
}
