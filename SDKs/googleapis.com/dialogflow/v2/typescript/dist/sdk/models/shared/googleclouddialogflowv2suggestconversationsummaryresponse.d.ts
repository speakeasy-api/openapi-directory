import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary } from "./googleclouddialogflowv2suggestconversationsummaryresponsesummary";
/**
 * The response message for Conversations.SuggestConversationSummary.
 */
export declare class GoogleCloudDialogflowV2SuggestConversationSummaryResponse extends SpeakeasyBase {
    /**
     * Number of messages prior to and including last_conversation_message used to compile the suggestion. It may be smaller than the SuggestSummaryRequest.context_size field in the request if there weren't that many messages in the conversation.
     */
    contextSize?: number;
    /**
     * The name of the latest conversation message used as context for compiling suggestion. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
    /**
     * Generated summary for a conversation.
     */
    summary?: GoogleCloudDialogflowV2SuggestConversationSummaryResponseSummary;
}
