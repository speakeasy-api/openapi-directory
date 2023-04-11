import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2FaqAnswer } from "./googleclouddialogflowv2faqanswer";
/**
 * The request message for Participants.SuggestFaqAnswers.
 */
export declare class GoogleCloudDialogflowV2SuggestFaqAnswersResponse extends SpeakeasyBase {
    /**
     * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestFaqAnswersRequest.context_size field in the request if there aren't that many messages in the conversation.
     */
    contextSize?: number;
    /**
     * Answers extracted from FAQ documents.
     */
    faqAnswers?: GoogleCloudDialogflowV2FaqAnswer[];
    /**
     * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
}
