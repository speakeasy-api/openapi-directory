import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteChannelWebhookServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class DeleteChannelWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteChannelWebhookRequest extends SpeakeasyBase {
    channelSid: string;
    serviceSid: string;
    sid: string;
}
export declare class DeleteChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
