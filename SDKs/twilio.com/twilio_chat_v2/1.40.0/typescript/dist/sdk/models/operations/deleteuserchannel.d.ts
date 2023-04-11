import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const DeleteUserChannelServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteUserChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteUserChannelRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/api/chat/rest/channels) the resource belongs to.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/api/chat/rest/services) to read the resources from.
     */
    serviceSid: string;
    /**
     * The SID of the [User](https://www.twilio.com/docs/api/chat/rest/users) to read the User Channel resources from.
     */
    userSid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.UserChannelEnumWebhookEnabledTypeEnum;
}
export declare class DeleteUserChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
