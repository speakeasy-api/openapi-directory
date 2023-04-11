import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput } from "./googleclouddialogflowcxv3beta1conversationturnuserinput";
import { GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput, GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput } from "./googleclouddialogflowcxv3beta1conversationturnvirtualagentoutput";
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
 */
export declare class GoogleCloudDialogflowCxV3beta1ConversationTurn extends SpeakeasyBase {
    /**
     * The input from the human user.
     */
    userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;
    /**
     * The output from the virtual agent.
     */
    virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutput;
}
/**
 * One interaction between a human and virtual agent. The human provides some input and the virtual agent provides a response.
 */
export declare class GoogleCloudDialogflowCxV3beta1ConversationTurnInput extends SpeakeasyBase {
    /**
     * The input from the human user.
     */
    userInput?: GoogleCloudDialogflowCxV3beta1ConversationTurnUserInput;
    /**
     * The output from the virtual agent.
     */
    virtualAgentOutput?: GoogleCloudDialogflowCxV3beta1ConversationTurnVirtualAgentOutputInput;
}
