import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AutomatedAgentConfig } from "./googleclouddialogflowv2beta1automatedagentconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig } from "./googleclouddialogflowv2beta1humanagenthandoffconfig";
import { GoogleCloudDialogflowV2beta1LoggingConfig } from "./googleclouddialogflowv2beta1loggingconfig";
import { GoogleCloudDialogflowV2beta1NotificationConfig } from "./googleclouddialogflowv2beta1notificationconfig";
import { GoogleCloudDialogflowV2beta1SpeechToTextConfig } from "./googleclouddialogflowv2beta1speechtotextconfig";
import { GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig } from "./googleclouddialogflowv2beta1synthesizespeechconfig";
/**
 * Defines the services to connect to incoming Dialogflow conversations.
 */
export declare class GoogleCloudDialogflowV2beta1ConversationProfile extends SpeakeasyBase {
    /**
     * Defines the Automated Agent to connect to a conversation.
     */
    automatedAgentConfig?: GoogleCloudDialogflowV2beta1AutomatedAgentConfig;
    /**
     * Output only. Create time of the conversation profile.
     */
    createTime?: string;
    /**
     * Required. Human readable name for this profile. Max length 1024 bytes.
     */
    displayName?: string;
    /**
     * Defines the Human Agent Assistant to connect to a conversation.
     */
    humanAgentAssistantConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;
    /**
     * Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
     */
    humanAgentHandoffConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig;
    /**
     * Language code for the conversation profile. If not specified, the language is en-US. Language at ConversationProfile should be set for all non en-us languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string;
    /**
     * Defines logging behavior for conversation lifecycle events.
     */
    loggingConfig?: GoogleCloudDialogflowV2beta1LoggingConfig;
    /**
     * The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`.
     */
    name?: string;
    /**
     * Defines notification behavior.
     */
    newMessageEventNotificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
    /**
     * Defines notification behavior.
     */
    notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
    /**
     * Name of the CX SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`.
     */
    securitySettings?: string;
    /**
     * Configures speech transcription for ConversationProfile.
     */
    sttConfig?: GoogleCloudDialogflowV2beta1SpeechToTextConfig;
    /**
     * The time zone of this conversational profile from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. Defaults to America/New_York.
     */
    timeZone?: string;
    /**
     * Configuration of how speech should be synthesized.
     */
    ttsConfig?: GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
    /**
     * Output only. Update time of the conversation profile.
     */
    updateTime?: string;
}
/**
 * Defines the services to connect to incoming Dialogflow conversations.
 */
export declare class GoogleCloudDialogflowV2beta1ConversationProfileInput extends SpeakeasyBase {
    /**
     * Defines the Automated Agent to connect to a conversation.
     */
    automatedAgentConfig?: GoogleCloudDialogflowV2beta1AutomatedAgentConfig;
    /**
     * Required. Human readable name for this profile. Max length 1024 bytes.
     */
    displayName?: string;
    /**
     * Defines the Human Agent Assistant to connect to a conversation.
     */
    humanAgentAssistantConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;
    /**
     * Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
     */
    humanAgentHandoffConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig;
    /**
     * Language code for the conversation profile. If not specified, the language is en-US. Language at ConversationProfile should be set for all non en-us languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string;
    /**
     * Defines logging behavior for conversation lifecycle events.
     */
    loggingConfig?: GoogleCloudDialogflowV2beta1LoggingConfig;
    /**
     * The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`.
     */
    name?: string;
    /**
     * Defines notification behavior.
     */
    newMessageEventNotificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
    /**
     * Defines notification behavior.
     */
    notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
    /**
     * Name of the CX SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`.
     */
    securitySettings?: string;
    /**
     * Configures speech transcription for ConversationProfile.
     */
    sttConfig?: GoogleCloudDialogflowV2beta1SpeechToTextConfig;
    /**
     * The time zone of this conversational profile from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. Defaults to America/New_York.
     */
    timeZone?: string;
    /**
     * Configuration of how speech should be synthesized.
     */
    ttsConfig?: GoogleCloudDialogflowV2beta1SynthesizeSpeechConfig;
}
