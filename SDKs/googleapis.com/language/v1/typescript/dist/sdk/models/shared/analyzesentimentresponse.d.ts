import { SpeakeasyBase } from "../../../internal/utils";
import { Sentence } from "./sentence";
import { Sentiment } from "./sentiment";
/**
 * The sentiment analysis response message.
 */
export declare class AnalyzeSentimentResponse extends SpeakeasyBase {
    /**
     * Represents the feeling associated with the entire text or entities in the text.
     */
    documentSentiment?: Sentiment;
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string;
    /**
     * The sentiment for all the sentences in the document.
     */
    sentences?: Sentence[];
}
