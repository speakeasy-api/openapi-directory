import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1IntentParameter } from "./googleclouddialogflowcxv3beta1intentparameter";
import { GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase } from "./googleclouddialogflowcxv3beta1intenttrainingphrase";
/**
 * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
 */
export declare class GoogleCloudDialogflowCxV3beta1Intent extends SpeakeasyBase {
    /**
     * Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.
     */
    description?: string;
    /**
     * Required. The human-readable name of the intent, unique within the agent.
     */
    displayName?: string;
    /**
     * Indicates whether this is a fallback intent. Currently only default fallback intent is allowed in the agent, which is added upon agent creation. Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.
     */
    isFallback?: boolean;
    /**
     * The key/value metadata to label an intent. Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes. Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys-contextual" means the intent is a contextual intent.
     */
    labels?: Record<string, string>;
    /**
     * The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.
     */
    name?: string;
    /**
     * The collection of parameters associated with the intent.
     */
    parameters?: GoogleCloudDialogflowCxV3beta1IntentParameter[];
    /**
     * The priority of this intent. Higher numbers represent higher priorities. - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the `Normal` priority in the console. - If the supplied value is negative, the intent is ignored in runtime detect intent requests.
     */
    priority?: number;
    /**
     * The collection of training phrases the agent is trained on to identify the intent.
     */
    trainingPhrases?: GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase[];
}
