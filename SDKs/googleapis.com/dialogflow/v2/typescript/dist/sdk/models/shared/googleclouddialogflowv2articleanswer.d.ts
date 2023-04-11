import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents article answer.
 */
export declare class GoogleCloudDialogflowV2ArticleAnswer extends SpeakeasyBase {
    /**
     * The name of answer record, in the format of "projects//locations//answerRecords/"
     */
    answerRecord?: string;
    /**
     * Article match confidence. The system's confidence score that this article is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidence?: number;
    /**
     * A map that contains metadata about the answer and the document from which it originates.
     */
    metadata?: Record<string, string>;
    /**
     * Article snippets.
     */
    snippets?: string[];
    /**
     * The article title.
     */
    title?: string;
    /**
     * The article URI.
     */
    uri?: string;
}
