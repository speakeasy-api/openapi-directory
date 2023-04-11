import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1SuggestionArticle } from "./googleclouddialogflowv2beta1suggestionarticle";
import { GoogleCloudDialogflowV2beta1SuggestionFaqAnswer } from "./googleclouddialogflowv2beta1suggestionfaqanswer";
/**
 * Represents a suggestion for a human agent.
 */
export declare class GoogleCloudDialogflowV2beta1Suggestion extends SpeakeasyBase {
    /**
     * Output only. Articles ordered by score in descending order.
     */
    articles?: GoogleCloudDialogflowV2beta1SuggestionArticle[];
    /**
     * Output only. The time the suggestion was created.
     */
    createTime?: string;
    /**
     * Output only. Answers extracted from FAQ documents.
     */
    faqAnswers?: GoogleCloudDialogflowV2beta1SuggestionFaqAnswer[];
    /**
     * Output only. Latest message used as context to compile this suggestion. Format: `projects//locations//conversations//messages/`.
     */
    latestMessage?: string;
    /**
     * Output only. The name of this suggestion. Format: `projects//locations//conversations//participants/* /suggestions/`.
     */
    name?: string;
}
