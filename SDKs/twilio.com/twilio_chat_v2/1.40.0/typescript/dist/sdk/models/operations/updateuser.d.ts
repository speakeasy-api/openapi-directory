import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateUserServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateUserUpdateUserRequest extends SpeakeasyBase {
    /**
     * A valid JSON string that contains application-specific data.
     */
    attributes?: string;
    /**
     * A descriptive string that you create to describe the resource. It is often used for display purposes.
     */
    friendlyName?: string;
    /**
     * The SID of the [Role](https://www.twilio.com/docs/chat/rest/role-resource) to assign to the User.
     */
    roleSid?: string;
}
export declare class UpdateUserRequest extends SpeakeasyBase {
    requestBody?: UpdateUserUpdateUserRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to update the User resource in.
     */
    serviceSid: string;
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
    chatV2ServiceUser?: shared.ChatV2ServiceUser;
}
