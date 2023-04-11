import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateChannelWebhookServerList: readonly ["https://chat.twilio.com"];
export declare class CreateChannelWebhookSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateChannelWebhookCreateChannelWebhookRequest extends SpeakeasyBase {
    /**
     * The events that cause us to call the Channel Webhook. Used when `type` is `webhook`. This parameter takes only one event. To specify more than one event, repeat this parameter for each event. For the list of possible events, see [Webhook Event Triggers](https://www.twilio.com/docs/chat/webhook-events#webhook-event-trigger).
     */
    configurationFilters?: string[];
    /**
     * The SID of the Studio [Flow](https://www.twilio.com/docs/studio/rest-api/flow) to call when an event in `configuration.filters` occurs. Used only when `type` is `studio`.
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
    type: shared.ChannelWebhookEnumTypeEnum;
}
export declare class CreateChannelWebhookRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the new Channel Webhook resource belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: CreateChannelWebhookCreateChannelWebhookRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) with the Channel to create the Webhook resource under.
     */
    serviceSid: string;
}
export declare class CreateChannelWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    chatV2ServiceChannelChannelWebhook?: shared.ChatV2ServiceChannelChannelWebhook;
}
