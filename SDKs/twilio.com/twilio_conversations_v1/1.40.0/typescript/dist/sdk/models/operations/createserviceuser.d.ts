import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateServiceUserServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateServiceUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceUserCreateServiceUserRequest extends SpeakeasyBase {
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
export declare class CreateServiceUserRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the User resource is associated with.
     */
    chatServiceSid: string;
    requestBody?: CreateServiceUserCreateServiceUserRequest;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ServiceUserEnumWebhookEnabledTypeEnum;
}
export declare class CreateServiceUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    conversationsV1ServiceServiceUser?: shared.ConversationsV1ServiceServiceUser;
}
