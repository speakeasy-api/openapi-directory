import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListChannelWebhookServerList: readonly ["https://chat.twilio.com"];
export declare class ListChannelWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListChannelWebhookRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Channel Webhook resources to read belong to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) with the Channel to read the resources from.
     */
    serviceSid: string;
}
export declare class ListChannelWebhookListChannelWebhookResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListChannelWebhookListChannelWebhookResponse extends SpeakeasyBase {
    meta?: ListChannelWebhookListChannelWebhookResponseMeta;
    webhooks?: shared.ChatV2ServiceChannelChannelWebhook[];
}
export declare class ListChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listChannelWebhookResponse?: ListChannelWebhookListChannelWebhookResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
