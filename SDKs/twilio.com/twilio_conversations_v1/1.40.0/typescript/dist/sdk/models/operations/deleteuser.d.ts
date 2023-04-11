import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const DeleteUserServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUserRequest extends SpeakeasyBase {
    /**
     * The SID of the User resource to delete. This value can be either the `sid` or the `identity` of the User resource to delete.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.UserEnumWebhookEnabledTypeEnum;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
