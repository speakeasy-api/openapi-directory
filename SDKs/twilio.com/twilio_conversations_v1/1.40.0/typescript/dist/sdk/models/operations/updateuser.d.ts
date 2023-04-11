import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUserServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUserUpdateUserRequest extends SpeakeasyBase {
    /**
     * The JSON Object string that stores application-specific data. If attributes have not been set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The SID of a service-level [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the user.
     */
    roleSid?: string;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    requestBody?: UpdateUserUpdateUserRequest;
    /**
     * The SID of the User resource to update. This value can be either the `sid` or the `identity` of the User resource to update.
     */
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
    conversationsV1User?: shared.ConversationsV1User;
}
