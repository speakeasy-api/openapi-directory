import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchChannelWebhookServerList: readonly ["https://chat.twilio.com"];
export declare class FetchChannelWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchChannelWebhookRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Channel Webhook resource to fetch belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) with the Channel to fetch the Webhook resource from.
     */
    serviceSid: string;
    /**
     * The SID of the Channel Webhook resource to fetch.
     */
    sid: string;
}
export declare class FetchChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceChannelChannelWebhook?: shared.ChatV2ServiceChannelChannelWebhook;
}
