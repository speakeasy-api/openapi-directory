import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3Flow } from "./googleclouddialogflowcxv3flow";
import { GoogleCloudDialogflowCxV3Page } from "./googleclouddialogflowcxv3page";
/**
 * The source or target of a transition.
 */
export declare class GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode extends SpeakeasyBase {
    /**
     * Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be "consumed". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.
     */
    flow?: GoogleCloudDialogflowCxV3Flow;
    /**
     * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
     */
    page?: GoogleCloudDialogflowCxV3Page;
}
