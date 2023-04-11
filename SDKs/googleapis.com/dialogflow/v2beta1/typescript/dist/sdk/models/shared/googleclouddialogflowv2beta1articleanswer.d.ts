import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents article answer.
 */
export declare class GoogleCloudDialogflowV2beta1ArticleAnswer extends SpeakeasyBase {
    /**
     * The name of answer record, in the format of "projects//locations//answerRecords/"
     */
    answerRecord?: string;
    /**
     * A map that contains metadata about the answer and the document from which it originates.
     */
    metadata?: Record<string, string>;
    /**
     * Output only. Article snippets.
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
