import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceWebhookConfigurationEnumMethodEnum } from "./servicewebhookconfigurationenummethodenum";
/**
 * OK
 */
export declare class ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this service.
     */
    accountSid?: string;
    /**
     * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
     */
    chatServiceSid?: string;
    /**
     * The list of events that your configured webhook targets will receive. Events not configured here will not fire. Possible values are `onParticipantAdd`, `onParticipantAdded`, `onDeliveryUpdated`, `onConversationUpdated`, `onConversationRemove`, `onParticipantRemove`, `onConversationUpdate`, `onMessageAdd`, `onMessageRemoved`, `onParticipantUpdated`, `onConversationAdded`, `onMessageAdded`, `onConversationAdd`, `onConversationRemoved`, `onParticipantUpdate`, `onMessageRemove`, `onMessageUpdated`, `onParticipantRemoved`, `onMessageUpdate` or `onConversationStateUpdated`.
     */
    filters?: string[];
    method?: ServiceWebhookConfigurationEnumMethodEnum;
    /**
     * The absolute url the post-event webhook request should be sent to.
     */
    postWebhookUrl?: string;
    /**
     * The absolute url the pre-event webhook request should be sent to.
     */
    preWebhookUrl?: string;
    /**
     * An absolute API resource URL for this webhook.
     */
    url?: string;
}
