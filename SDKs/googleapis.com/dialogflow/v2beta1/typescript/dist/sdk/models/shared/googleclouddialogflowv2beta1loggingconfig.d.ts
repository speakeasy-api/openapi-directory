import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines logging behavior for conversation lifecycle events.
 */
export declare class GoogleCloudDialogflowV2beta1LoggingConfig extends SpeakeasyBase {
    /**
     * Whether to log conversation events like CONVERSATION_STARTED to Stackdriver in the conversation project as JSON format ConversationEvent protos.
     */
    enableStackdriverLogging?: boolean;
}
