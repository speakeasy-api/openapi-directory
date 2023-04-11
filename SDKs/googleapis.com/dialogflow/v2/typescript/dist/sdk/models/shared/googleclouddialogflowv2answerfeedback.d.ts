import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AgentAssistantFeedback } from "./googleclouddialogflowv2agentassistantfeedback";
/**
 * The correctness level of the specific answer.
 */
export declare enum GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum {
    CorrectnessLevelUnspecified = "CORRECTNESS_LEVEL_UNSPECIFIED",
    NotCorrect = "NOT_CORRECT",
    PartiallyCorrect = "PARTIALLY_CORRECT",
    FullyCorrect = "FULLY_CORRECT"
}
/**
 * Represents feedback the customer has about the quality & correctness of a certain answer in a conversation.
 */
export declare class GoogleCloudDialogflowV2AnswerFeedback extends SpeakeasyBase {
    /**
     * Detail feedback of Agent Assist result.
     */
    agentAssistantDetailFeedback?: GoogleCloudDialogflowV2AgentAssistantFeedback;
    /**
     * Time when the answer/item was clicked.
     */
    clickTime?: string;
    /**
     * Indicates whether the answer/item was clicked by the human agent or not. Default to false.
     */
    clicked?: boolean;
    /**
     * The correctness level of the specific answer.
     */
    correctnessLevel?: GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum;
    /**
     * Time when the answer/item was displayed.
     */
    displayTime?: string;
    /**
     * Indicates whether the answer/item was displayed to the human agent in the agent desktop UI. Default to false.
     */
    displayed?: boolean;
}
