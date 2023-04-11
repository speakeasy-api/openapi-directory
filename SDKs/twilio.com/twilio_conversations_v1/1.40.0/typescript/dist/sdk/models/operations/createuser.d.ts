import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateUserServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateUserCreateUserRequest extends SpeakeasyBase {
    /**
     * The JSON Object string that stores application-specific data. If attributes have not been set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The application-defined string that uniquely identifies the resource's User within the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource). This value is often a username or an email address, and is case-sensitive.
     */
    identity: string;
    /**
     * The SID of a service-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the user.
     */
    roleSid?: string;
}
export declare class CreateUserRequest extends SpeakeasyBase {
    requestBody?: CreateUserCreateUserRequest;
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
    conversationsV1User?: shared.ConversationsV1User;
}
