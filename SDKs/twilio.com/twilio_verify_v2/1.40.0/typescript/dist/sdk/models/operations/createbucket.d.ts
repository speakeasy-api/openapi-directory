import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateBucketServerList: readonly ["https://verify.twilio.com"];
export declare class CreateBucketSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateBucketCreateBucketRequest extends SpeakeasyBase {
    /**
     * Number of seconds that the rate limit will be enforced over.
     */
    interval: number;
    /**
     * Maximum number of requests permitted in during the interval.
     */
    max: number;
}
export declare class CreateBucketRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Rate Limit resource.
     */
    rateLimitSid: string;
    requestBody?: CreateBucketCreateBucketRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid: string;
}
export declare class CreateBucketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    verifyV2ServiceRateLimitBucket?: shared.VerifyV2ServiceRateLimitBucket;
}
