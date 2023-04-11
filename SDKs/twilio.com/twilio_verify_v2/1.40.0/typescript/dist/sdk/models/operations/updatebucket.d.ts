import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateBucketServerList: readonly ["https://verify.twilio.com"];
export declare class UpdateBucketSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateBucketUpdateBucketRequest extends SpeakeasyBase {
    /**
     * Number of seconds that the rate limit will be enforced over.
     */
    interval?: number;
    /**
     * Maximum number of requests permitted in during the interval.
     */
    max?: number;
}
export declare class UpdateBucketRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Rate Limit resource.
     */
    rateLimitSid: string;
    requestBody?: UpdateBucketUpdateBucketRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid: string;
    /**
     * A 34 character string that uniquely identifies this Bucket.
     */
    sid: string;
}
export declare class UpdateBucketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    verifyV2ServiceRateLimitBucket?: shared.VerifyV2ServiceRateLimitBucket;
}
