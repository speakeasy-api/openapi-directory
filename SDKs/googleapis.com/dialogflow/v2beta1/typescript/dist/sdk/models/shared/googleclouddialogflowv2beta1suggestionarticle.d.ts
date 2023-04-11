import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents suggested article.
 */
export declare class GoogleCloudDialogflowV2beta1SuggestionArticle extends SpeakeasyBase {
    /**
     * Output only. The name of answer record, in the format of "projects//locations//answerRecords/"
     */
    answerRecord?: string;
    /**
     * Output only. A map that contains metadata about the answer and the document from which it originates.
     */
    metadata?: Record<string, string>;
    /**
     * Output only. Article snippets.
     */
    snippets?: string[];
    /**
     * Output only. The article title.
     */
    title?: string;
    /**
     * Output only. The article URI.
     */
    uri?: string;
}
