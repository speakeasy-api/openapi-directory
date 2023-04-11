import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchNotificationServerList: readonly ["https://api.twilio.com"];
export declare class FetchNotificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchNotificationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Notification resource to fetch.
     */
    accountSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Notification resource to fetch.
     */
    sid: string;
}
export declare class FetchNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountNotificationInstance?: shared.ApiV2010AccountNotificationInstance;
}
