import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1FaqAnswer } from "./googleclouddialogflowv2beta1faqanswer";
/**
 * The request message for Participants.SuggestFaqAnswers.
 */
export declare class GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse extends SpeakeasyBase {
    /**
     * Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestFaqAnswersRequest.context_size field in the request if there aren't that many messages in the conversation.
     */
    contextSize?: number;
    /**
     * Output only. Answers extracted from FAQ documents.
     */
    faqAnswers?: GoogleCloudDialogflowV2beta1FaqAnswer[];
    /**
     * The name of the latest conversation message used to compile suggestion for. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
}
