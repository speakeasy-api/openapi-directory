import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateChannelWebhookServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateChannelWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateChannelWebhookUpdateChannelWebhookRequest extends SpeakeasyBase {
    /**
     * The events that cause us to call the Channel Webhook. Used when `type` is `webhook`. This parameter takes only one event. To specify more than one event, repeat this parameter for each event. For the list of possible events, see [Webhook Event Triggers](https://www.twilio.com/docs/chat/webhook-events#webhook-event-trigger).
     */
    configurationFilters?: string[];
    /**
     * The SID of the Studio [Flow](https://www.twilio.com/docs/studio/rest-api/flow) to call when an event in `configuration.filters` occurs. Used only when `type` = `studio`.
     */
    configurationFlowSid?: string;
    configurationMethod?: shared.ChannelWebhookEnumMethodEnum;
    /**
     * The number of times to retry the webhook if the first attempt fails. Can be an integer between 0 and 3, inclusive, and the default is 0.
     */
    configurationRetryCount?: number;
    /**
     * A string that will cause us to call the webhook when it is present in a message body. This parameter takes only one trigger string. To specify more than one, repeat this parameter for each trigger string up to a total of 5 trigger strings. Used only when `type` = `trigger`.
     */
    configurationTriggers?: string[];
    /**
     * The URL of the webhook to call using the `configuration.method`.
     */
    configurationUrl?: string;
}
export declare class UpdateChannelWebhookRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the Channel Webhook resource to update belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: UpdateChannelWebhookUpdateChannelWebhookRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) with the Channel that has the Webhook resource to update.
     */
    serviceSid: string;
    /**
     * The SID of the Channel Webhook resource to update.
     */
    sid: string;
}
export declare class UpdateChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV2ServiceChannelChannelWebhook?: shared.ChatV2ServiceChannelChannelWebhook;
}
