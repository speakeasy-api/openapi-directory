import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1AdvancedSettings } from "./googleclouddialogflowcxv3beta1advancedsettings";
import { GoogleCloudDialogflowCxV3beta1SpeechToTextSettings } from "./googleclouddialogflowcxv3beta1speechtotextsettings";
import { GoogleCloudDialogflowCxV3beta1TextToSpeechSettings } from "./googleclouddialogflowcxv3beta1texttospeechsettings";
/**
 * Agents are best described as Natural Language Understanding (NLU) modules that transform user requests into actionable data. You can include agents in your app, product, or service to determine user intent and respond to the user in a natural way. After you create an agent, you can add Intents, Entity Types, Flows, Fulfillments, Webhooks, and so on to manage the conversation flows..
 */
export declare class GoogleCloudDialogflowCxV3beta1Agent extends SpeakeasyBase {
    /**
     * Hierarchical advanced settings for agent/flow/page/fulfillment/parameter. Settings exposed at lower level overrides the settings exposed at higher level. Overriding occurs at the sub-setting level. For example, the playback_interruption_settings at fulfillment level only overrides the playback_interruption_settings at the agent level, leaving other settings at the agent level unchanged. DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Hierarchy: Agent->Flow->Page->Fulfillment/Parameter.
     */
    advancedSettings?: GoogleCloudDialogflowCxV3beta1AdvancedSettings;
    /**
     * The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted [Web Demo](https://cloud.google.com/dialogflow/docs/integrations/web-demo) integration.
     */
    avatarUri?: string;
    /**
     * Required. Immutable. The default language of the agent as a language tag. See [Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language) for a list of the currently supported language codes. This field cannot be set by the Agents.UpdateAgent method.
     */
    defaultLanguageCode?: string;
    /**
     * The description of the agent. The maximum length is 500 characters. If exceeded, the request is rejected.
     */
    description?: string;
    /**
     * Required. The human-readable name of the agent, unique within the location.
     */
    displayName?: string;
    /**
     * Indicates if automatic spell correction is enabled in detect intent requests.
     */
    enableSpellCorrection?: boolean;
    /**
     * Indicates if stackdriver logging is enabled for the agent. Please use agent.advanced_settings instead.
     */
    enableStackdriverLogging?: boolean;
    /**
     * Indicates whether the agent is locked for changes. If the agent is locked, modifications to the agent will be rejected except for RestoreAgent.
     */
    locked?: boolean;
    /**
     * The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`.
     */
    name?: string;
    /**
     * Name of the SecuritySettings reference for the agent. Format: `projects//locations//securitySettings/`.
     */
    securitySettings?: string;
    /**
     * Settings related to speech recognition.
     */
    speechToTextSettings?: GoogleCloudDialogflowCxV3beta1SpeechToTextSettings;
    /**
     * Immutable. Name of the start flow in this agent. A start flow will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: `projects//locations//agents//flows/`.
     */
    startFlow?: string;
    /**
     * The list of all languages supported by the agent (except for the `default_language_code`).
     */
    supportedLanguageCodes?: string[];
    /**
     * Settings related to speech generating.
     */
    textToSpeechSettings?: GoogleCloudDialogflowCxV3beta1TextToSpeechSettings;
    /**
     * Required. The time zone of the agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.
     */
    timeZone?: string;
}
