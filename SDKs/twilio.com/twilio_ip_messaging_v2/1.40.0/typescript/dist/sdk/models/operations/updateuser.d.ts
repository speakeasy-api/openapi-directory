import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUserServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUserUpdateUserRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    roleSid?: string;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    requestBody?: UpdateUserUpdateUserRequest;
    serviceSid: string;
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.UserEnumWebhookEnabledTypeEnum;
}
export declare class UpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    ipMessagingV2ServiceUser?: shared.IpMessagingV2ServiceUser;
}
