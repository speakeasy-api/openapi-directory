import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The suggestion chip message that allows the user to jump out to the app or website associated with this agent.
 */
export declare class GoogleCloudDialogflowV2IntentMessageLinkOutSuggestion extends SpeakeasyBase {
    /**
     * Required. The name of the app or site this chip is linking to.
     */
    destinationName?: string;
    /**
     * Required. The URI of the app or site to open when the user taps the suggestion chip.
     */
    uri?: string;
}
