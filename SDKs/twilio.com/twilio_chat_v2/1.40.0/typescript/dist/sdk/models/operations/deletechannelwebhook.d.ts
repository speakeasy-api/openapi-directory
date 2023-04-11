import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteChannelWebhookServerList: readonly ["https://chat.twilio.com"];
export declare class DeleteChannelWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteChannelWebhookRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Channel Webhook resource to delete belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) with the Channel to delete the Webhook resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Channel Webhook resource to delete.
     */
    sid: string;
}
export declare class DeleteChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
