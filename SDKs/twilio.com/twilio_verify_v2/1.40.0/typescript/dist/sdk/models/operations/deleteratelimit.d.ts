import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteRateLimitServerList: readonly ["https://verify.twilio.com"];
export declare class DeleteRateLimitSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteRateLimitRequest extends SpeakeasyBase {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is associated with.
     */
    serviceSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Rate Limit resource to fetch.
     */
    sid: string;
}
export declare class DeleteRateLimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
