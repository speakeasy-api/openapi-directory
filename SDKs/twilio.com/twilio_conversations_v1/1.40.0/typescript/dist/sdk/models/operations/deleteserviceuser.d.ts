import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const DeleteServiceUserServerList: readonly ["https://conversations.twilio.com"];
export declare class DeleteServiceUserSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteServiceUserRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) to delete the User resource from.
     */
    chatServiceSid: string;
    /**
     * The SID of the User resource to delete. This value can be either the `sid` or the `identity` of the User resource to delete.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ServiceUserEnumWebhookEnabledTypeEnum;
}
export declare class DeleteServiceUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
