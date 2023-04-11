import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchCallNotificationServerList: readonly ["https://api.twilio.com"];
export declare class FetchCallNotificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchCallNotificationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Call Notification resource to fetch.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID of the Call Notification resource to fetch.
     */
    callSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Call Notification resource to fetch.
     */
    sid: string;
}
export declare class FetchCallNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountCallCallNotificationInstance?: shared.ApiV2010AccountCallCallNotificationInstance;
}
