import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1DetectIntentResponse } from "./googleclouddialogflowv2beta1detectintentresponse";
import { GoogleCloudDialogflowV2beta1ResponseMessage } from "./googleclouddialogflowv2beta1responsemessage";
/**
 * AutomatedAgentReply type.
 */
export declare enum GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum {
    AutomatedAgentReplyTypeUnspecified = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}
/**
 * Represents a response from an automated agent.
 */
export declare class GoogleCloudDialogflowV2beta1AutomatedAgentReply extends SpeakeasyBase {
    /**
     * Indicates whether the partial automated agent reply is interruptible when a later reply message arrives. e.g. if the agent specified some music as partial response, it can be cancelled.
     */
    allowCancellation?: boolean;
    /**
     * AutomatedAgentReply type.
     */
    automatedAgentReplyType?: GoogleCloudDialogflowV2beta1AutomatedAgentReplyAutomatedAgentReplyTypeEnum;
    /**
     * The unique identifier of the current Dialogflow CX conversation page. Format: `projects//locations//agents//flows//pages/`.
     */
    cxCurrentPage?: string;
    /**
     * The collection of current Dialogflow CX agent session parameters at the time of this response. Deprecated: Use `parameters` instead.
     */
    cxSessionParameters?: Record<string, any>;
    /**
     * The message returned from the DetectIntent method.
     */
    detectIntentResponse?: GoogleCloudDialogflowV2beta1DetectIntentResponse;
    /**
     * Event name if an event is triggered for the query.
     */
    event?: string;
    /**
     * Name of the intent if an intent is matched for the query. For a V2 query, the value format is `projects//locations/ /agent/intents/`. For a V3 query, the value format is `projects//locations/ /agents//intents/`.
     */
    intent?: string;
    /**
     * The confidence of the match. Values range from 0.0 (completely uncertain) to 1.0 (completely certain). This value is for informational purpose only and is only used to help match the best intent within the classification threshold. This value may change for the same end-user expression at any time due to a model retraining or change in implementation.
     */
    matchConfidence?: number;
    /**
     * The collection of current parameters at the time of this response.
     */
    parameters?: Record<string, any>;
    /**
     * Response messages from the automated agent.
     */
    responseMessages?: GoogleCloudDialogflowV2beta1ResponseMessage[];
}
