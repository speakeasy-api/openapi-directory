import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1Match } from "./googleclouddialogflowcxv3beta1match";
import { GoogleCloudDialogflowCxV3beta1Page } from "./googleclouddialogflowcxv3beta1page";
/**
 * Response of MatchIntent.
 */
export declare class GoogleCloudDialogflowCxV3beta1MatchIntentResponse extends SpeakeasyBase {
    /**
     * A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).
     */
    currentPage?: GoogleCloudDialogflowCxV3beta1Page;
    /**
     * Match results, if more than one, ordered descendingly by the confidence we have that the particular intent matches the query.
     */
    matches?: GoogleCloudDialogflowCxV3beta1Match[];
    /**
     * If natural language text was provided as input, this field will contain a copy of the text.
     */
    text?: string;
    /**
     * If natural language speech audio was provided as input, this field will contain the transcript for the audio.
     */
    transcript?: string;
    /**
     * If an event was provided as input, this field will contain a copy of the event name.
     */
    triggerEvent?: string;
    /**
     * If an intent was provided as input, this field will contain a copy of the intent identifier. Format: `projects//locations//agents//intents/`.
     */
    triggerIntent?: string;
}
