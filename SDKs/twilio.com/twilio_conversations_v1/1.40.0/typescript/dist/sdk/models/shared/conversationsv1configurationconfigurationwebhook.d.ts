import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationWebhookEnumMethodEnum } from "./configurationwebhookenummethodenum";
import { ConfigurationWebhookEnumTargetEnum } from "./configurationwebhookenumtargetenum";
/**
 * OK
 */
export declare class ConversationsV1ConfigurationConfigurationWebhook extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
     */
    accountSid?: string;
    /**
     * The list of webhook event triggers that are enabled for this Service: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`
     */
    filters?: string[];
    method?: ConfigurationWebhookEnumMethodEnum;
    /**
     * The absolute url the post-event webhook request should be sent to.
     */
    postWebhookUrl?: string;
    /**
     * The absolute url the pre-event webhook request should be sent to.
     */
    preWebhookUrl?: string;
    target?: ConfigurationWebhookEnumTargetEnum;
    /**
     * An absolute API resource API resource URL for this webhook.
     */
    url?: string;
}
