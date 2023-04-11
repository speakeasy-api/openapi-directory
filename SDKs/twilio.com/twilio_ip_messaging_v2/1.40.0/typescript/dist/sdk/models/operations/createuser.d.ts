import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUserServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUserCreateUserRequest extends SpeakeasyBase {
    attributes?: string;
    friendlyName?: string;
    identity: string;
    roleSid?: string;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    requestBody?: CreateUserCreateUserRequest;
    serviceSid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.UserEnumWebhookEnabledTypeEnum;
}
export declare class CreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV2ServiceUser?: shared.IpMessagingV2ServiceUser;
}
