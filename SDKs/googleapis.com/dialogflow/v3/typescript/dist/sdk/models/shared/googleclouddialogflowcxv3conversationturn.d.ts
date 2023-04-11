import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ConversationTurnUserInput } from "./googleclouddialogflowcxv3conversationturnuserinput";
import { GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput, GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput } from "./googleclouddialogflowcxv3conversationturnvirtualagentoutput";
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
 */
export declare class GoogleCloudDialogflowCxV3ConversationTurn extends SpeakeasyBase {
    /**
     * The input from the human user.
     */
    userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;
    /**
     * The output from the virtual agent.
     */
    virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput;
}
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
 */
export declare class GoogleCloudDialogflowCxV3ConversationTurnInput extends SpeakeasyBase {
    /**
     * The input from the human user.
     */
    userInput?: GoogleCloudDialogflowCxV3ConversationTurnUserInput;
    /**
     * The output from the virtual agent.
     */
    virtualAgentOutput?: GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput;
}
