import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1QueryInput } from "./googleclouddialogflowcxv3beta1queryinput";
/**
 * The input from the human user.
 */
export declare class GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput extends SpeakeasyBase {
    /**
     * Whether sentiment analysis is enabled.
     */
    enableSentimentAnalysis?: boolean;
    /**
     * Parameters that need to be injected into the conversation during intent detection.
     */
    injectedParameters?: Record<string, any>;
    /**
     * Represents the query input. It can contain one of: 1. A conversational query in the form of text. 2. An intent query that specifies which intent to trigger. 3. Natural language speech audio to be processed. 4. An event to be triggered.
     */
    input?: GoogleCloudDialogflowCxV3beta1QueryInput;
    /**
     * If webhooks should be allowed to trigger in response to the user utterance. Often if parameters are injected, webhooks should not be enabled.
     */
    isWebhookEnabled?: boolean;
}
