import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2TextInput } from "./googleclouddialogflowv2textinput";
/**
 * The request message for Participants.SuggestSmartReplies.
 */
export declare class GoogleCloudDialogflowV2SuggestSmartRepliesRequest extends SpeakeasyBase {
    /**
     * Max number of messages prior to and including [latest_message] to use as context when compiling the suggestion. By default 20 and at most 50.
     */
    contextSize?: number;
    /**
     * ============================================================================ Auxiliary proto messages. Represents the natural language text to be processed.
     */
    currentTextInput?: GoogleCloudDialogflowV2TextInput;
    /**
     * The name of the latest conversation message to compile suggestion for. If empty, it will be the latest message of the conversation. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
}
