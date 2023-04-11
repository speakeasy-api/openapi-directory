import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUserServerList: readonly ["https://chat.twilio.com"];
export declare class CreateUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUserCreateUserRequest extends SpeakeasyBase {
    /**
     * A valid JSON string that contains application-specific data.
     */
    attributes?: string;
    /**
     * A descriptive string that you create to describe the new resource. This value is often used for display purposes.
     */
    friendlyName?: string;
    /**
     * The `identity` value that uniquely identifies the new resource's [User](https://www.twilio.com/docs/chat/rest/user-resource) within the [Service](https://www.twilio.com/docs/chat/rest/service-resource). This value is often a username or email address. See the Identity documentation for more info.
     */
    identity: string;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/chat/rest/role-resource) to assign to the new User.
     */
    roleSid?: string;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    requestBody?: CreateUserCreateUserRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the User resource under.
     */
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
    chatV2ServiceUser?: shared.ChatV2ServiceUser;
}
