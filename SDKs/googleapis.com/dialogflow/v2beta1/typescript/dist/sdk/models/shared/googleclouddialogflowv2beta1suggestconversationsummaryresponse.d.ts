import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary } from "./googleclouddialogflowv2beta1suggestconversationsummaryresponsesummary";
/**
 * The response message for Conversations.SuggestConversationSummary.
 */
export declare class GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse extends SpeakeasyBase {
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
    summary?: GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponseSummary;
}
