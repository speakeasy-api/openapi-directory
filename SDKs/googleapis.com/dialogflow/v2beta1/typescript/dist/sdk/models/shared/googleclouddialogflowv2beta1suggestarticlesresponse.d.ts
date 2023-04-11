import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ArticleAnswer } from "./googleclouddialogflowv2beta1articleanswer";
/**
 * The response message for Participants.SuggestArticles.
 */
export declare class GoogleCloudDialogflowV2beta1SuggestArticlesResponse extends SpeakeasyBase {
    /**
     * Output only. Articles ordered by score in descending order.
     */
    articleAnswers?: GoogleCloudDialogflowV2beta1ArticleAnswer[];
    /**
     * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestArticlesResponse.context_size field in the request if there aren't that many messages in the conversation.
     */
    contextSize?: number;
    /**
     * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
}
