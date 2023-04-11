import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceWebhookConfigurationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceWebhookConfigurationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest extends SpeakeasyBase {
    /**
     * The list of events that your configured webhook targets will receive. Events not configured here will not fire. Possible values are `onParticipantAdd`, `onParticipantAdded`, `onDeliveryUpdated`, `onConversationUpdated`, `onConversationRemove`, `onParticipantRemove`, `onConversationUpdate`, `onMessageAdd`, `onMessageRemoved`, `onParticipantUpdated`, `onConversationAdded`, `onMessageAdded`, `onConversationAdd`, `onConversationRemoved`, `onParticipantUpdate`, `onMessageRemove`, `onMessageUpdated`, `onParticipantRemoved`, `onMessageUpdate` or `onConversationStateUpdated`.
     */
    filters?: string[];
    /**
     * The HTTP method to be used when sending a webhook request. One of `GET` or `POST`.
     */
    method?: string;
    /**
     * The absolute url the post-event webhook request should be sent to.
     */
    postWebhookUrl?: string;
    /**
     * The absolute url the pre-event webhook request should be sent to.
     */
    preWebhookUrl?: string;
}
export declare class UpdateServiceWebhookConfigurationRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
     */
    chatServiceSid: string;
    requestBody?: UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest;
}
export declare class UpdateServiceWebhookConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceConfigurationServiceWebhookConfiguration?: shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration;
}
