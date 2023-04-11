import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ArticleAnswer } from "./googleclouddialogflowv2articleanswer";
/**
 * The response message for Participants.SuggestArticles.
 */
export declare class GoogleCloudDialogflowV2SuggestArticlesResponse extends SpeakeasyBase {
    /**
     * Articles ordered by score in descending order.
     */
    articleAnswers?: GoogleCloudDialogflowV2ArticleAnswer[];
    /**
     * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestArticlesRequest.context_size field in the request if there aren't that many messages in the conversation.
     */
    contextSize?: number;
    /**
     * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
}
