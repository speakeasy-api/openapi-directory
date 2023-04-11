import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteBucketServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteBucketSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteBucketRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Rate Limit resource.
     */
    rateLimitSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid: string;
    /**
     * A 34 character string that uniquely identifies this Bucket.
     */
    sid: string;
}
export declare class DeleteBucketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
