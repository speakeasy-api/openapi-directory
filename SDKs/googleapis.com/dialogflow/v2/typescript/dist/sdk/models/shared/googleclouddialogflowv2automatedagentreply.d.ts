import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2DetectIntentResponse } from "./googleclouddialogflowv2detectintentresponse";
/**
 * AutomatedAgentReply type.
 */
export declare enum GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum {
    AutomatedAgentReplyTypeUnspecified = "AUTOMATED_AGENT_REPLY_TYPE_UNSPECIFIED",
    Partial = "PARTIAL",
    Final = "FINAL"
}
/**
 * Represents a response from an automated agent.
 */
export declare class GoogleCloudDialogflowV2AutomatedAgentReply extends SpeakeasyBase {
    /**
     * Indicates whether the partial automated agent reply is interruptible when a later reply message arrives. e.g. if the agent specified some music as partial response, it can be cancelled.
     */
    allowCancellation?: boolean;
    /**
     * AutomatedAgentReply type.
     */
    automatedAgentReplyType?: GoogleCloudDialogflowV2AutomatedAgentReplyAutomatedAgentReplyTypeEnum;
    /**
     * The unique identifier of the current Dialogflow CX conversation page. Format: `projects//locations//agents//flows//pages/`.
     */
    cxCurrentPage?: string;
    /**
     * The message returned from the DetectIntent method.
     */
    detectIntentResponse?: GoogleCloudDialogflowV2DetectIntentResponse;
}
