import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const DeleteMessageServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteMessageRequest extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.MessageEnumWebhookEnabledTypeEnum;
}
export declare class DeleteMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
