import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Intent } from "./googleclouddialogflowcxv3intent";
import { GoogleCloudDialogflowCxV3Page, GoogleCloudDialogflowCxV3PageInput } from "./googleclouddialogflowcxv3page";
import { GoogleCloudDialogflowCxV3ResponseMessageText, GoogleCloudDialogflowCxV3ResponseMessageTextInput } from "./googleclouddialogflowcxv3responsemessagetext";
import { GoogleCloudDialogflowCxV3TestRunDifference } from "./googleclouddialogflowcxv3testrundifference";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * The output from the virtual agent.
 */
export declare class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutput extends SpeakeasyBase {
    /**
     * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
     */
    currentPage?: GoogleCloudDialogflowCxV3Page;
    /**
     * Required. Input only. The diagnostic info output for the turn. Required to calculate the testing coverage.
     */
    diagnosticInfo?: Record<string, any>;
    /**
     * Output only. If this is part of a result conversation turn, the list of differences between the original run and the replay for this output, if any.
     */
    differences?: GoogleCloudDialogflowCxV3TestRunDifference[];
    /**
     * The session parameters available to the bot at this point.
     */
    sessionParameters?: Record<string, any>;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: GoogleRpcStatus;
    /**
     * The text responses from the agent for the turn.
     */
    textResponses?: GoogleCloudDialogflowCxV3ResponseMessageText[];
    /**
     * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
     */
    triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
}
/**
 * The output from the virtual agent.
 */
export declare class GoogleCloudDialogflowCxV3ConversationTurnVirtualAgentOutputInput extends SpeakeasyBase {
    /**
     * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
     */
    currentPage?: GoogleCloudDialogflowCxV3PageInput;
    /**
     * Required. Input only. The diagnostic info output for the turn. Required to calculate the testing coverage.
     */
    diagnosticInfo?: Record<string, any>;
    /**
     * The session parameters available to the bot at this point.
     */
    sessionParameters?: Record<string, any>;
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    status?: GoogleRpcStatus;
    /**
     * The text responses from the agent for the turn.
     */
    textResponses?: GoogleCloudDialogflowCxV3ResponseMessageTextInput[];
    /**
     * An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
     */
    triggeredIntent?: GoogleCloudDialogflowCxV3Intent;
}
