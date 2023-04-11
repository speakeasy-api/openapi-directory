import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Suggestion } from "./googleclouddialogflowv2beta1suggestion";
/**
 * The response message for Participants.CompileSuggestion.
 */
export declare class GoogleCloudDialogflowV2beta1CompileSuggestionResponse extends SpeakeasyBase {
    /**
     * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the CompileSuggestionRequest.context_size field in the request if there aren't that many messages in the conversation.
     */
    contextSize?: number;
    /**
     * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
    /**
     * Represents a suggestion for a human agent.
     */
    suggestion?: GoogleCloudDialogflowV2beta1Suggestion;
}
