import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request message for Participants.CompileSuggestion.
 */
export declare class GoogleCloudDialogflowV2beta1CompileSuggestionRequest extends SpeakeasyBase {
    /**
     * Optional. Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. If zero or less than zero, 20 is used.
     */
    contextSize?: number;
    /**
     * Optional. The name of the latest conversation message to compile suggestion for. If empty, it will be the latest message of the conversation. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
}
