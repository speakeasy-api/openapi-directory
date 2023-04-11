import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AutomatedAgentConfig } from "./googleclouddialogflowv2automatedagentconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfig } from "./googleclouddialogflowv2humanagentassistantconfig";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfig } from "./googleclouddialogflowv2humanagenthandoffconfig";
import { GoogleCloudDialogflowV2LoggingConfig } from "./googleclouddialogflowv2loggingconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";
import { GoogleCloudDialogflowV2SpeechToTextConfig } from "./googleclouddialogflowv2speechtotextconfig";
import { GoogleCloudDialogflowV2SynthesizeSpeechConfig } from "./googleclouddialogflowv2synthesizespeechconfig";
/**
 * Defines the services to connect to incoming Dialogflow conversations.
 */
export declare class GoogleCloudDialogflowV2ConversationProfile extends SpeakeasyBase {
    /**
     * Defines the Automated Agent to connect to a conversation.
     */
    automatedAgentConfig?: GoogleCloudDialogflowV2AutomatedAgentConfig;
    /**
     * Output only. Create time of the conversation profile.
     */
    createTime?: string;
    /**
     * Required. Human readable name for this profile. Max length 1024 bytes.
     */
    displayName?: string;
    /**
     * Defines the Human Agent Assist to connect to a conversation.
     */
    humanAgentAssistantConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfig;
    /**
     * Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
     */
    humanAgentHandoffConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfig;
    /**
     * Language code for the conversation profile. If not specified, the language is en-US. Language at ConversationProfile should be set for all non en-US languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string;
    /**
     * Defines logging behavior for conversation lifecycle events.
     */
    loggingConfig?: GoogleCloudDialogflowV2LoggingConfig;
    /**
     * The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`.
     */
    name?: string;
    /**
     * Defines notification behavior.
     */
    newMessageEventNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
    /**
     * Defines notification behavior.
     */
    notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
    /**
     * Name of the CX SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`.
     */
    securitySettings?: string;
    /**
     * Configures speech transcription for ConversationProfile.
     */
    sttConfig?: GoogleCloudDialogflowV2SpeechToTextConfig;
    /**
     * The time zone of this conversational profile from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. Defaults to America/New_York.
     */
    timeZone?: string;
    /**
     * Configuration of how speech should be synthesized.
     */
    ttsConfig?: GoogleCloudDialogflowV2SynthesizeSpeechConfig;
    /**
     * Output only. Update time of the conversation profile.
     */
    updateTime?: string;
}
/**
 * Defines the services to connect to incoming Dialogflow conversations.
 */
export declare class GoogleCloudDialogflowV2ConversationProfileInput extends SpeakeasyBase {
    /**
     * Defines the Automated Agent to connect to a conversation.
     */
    automatedAgentConfig?: GoogleCloudDialogflowV2AutomatedAgentConfig;
    /**
     * Required. Human readable name for this profile. Max length 1024 bytes.
     */
    displayName?: string;
    /**
     * Defines the Human Agent Assist to connect to a conversation.
     */
    humanAgentAssistantConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfig;
    /**
     * Defines the hand off to a live agent, typically on which external agent service provider to connect to a conversation. Currently, this feature is not general available, please contact Google to get access.
     */
    humanAgentHandoffConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfig;
    /**
     * Language code for the conversation profile. If not specified, the language is en-US. Language at ConversationProfile should be set for all non en-US languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string;
    /**
     * Defines logging behavior for conversation lifecycle events.
     */
    loggingConfig?: GoogleCloudDialogflowV2LoggingConfig;
    /**
     * The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`.
     */
    name?: string;
    /**
     * Defines notification behavior.
     */
    newMessageEventNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
    /**
     * Defines notification behavior.
     */
    notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
    /**
     * Name of the CX SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`.
     */
    securitySettings?: string;
    /**
     * Configures speech transcription for ConversationProfile.
     */
    sttConfig?: GoogleCloudDialogflowV2SpeechToTextConfig;
    /**
     * The time zone of this conversational profile from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. Defaults to America/New_York.
     */
    timeZone?: string;
    /**
     * Configuration of how speech should be synthesized.
     */
    ttsConfig?: GoogleCloudDialogflowV2SynthesizeSpeechConfig;
}
