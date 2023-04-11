import { SpeakeasyBase } from "../../../internal/utils";
import { ClassificationCategory } from "./classificationcategory";
import { Entity } from "./entity";
import { Sentence } from "./sentence";
import { Sentiment } from "./sentiment";
import { Token } from "./token";
/**
 * The text annotations response message.
 */
export declare class AnnotateTextResponse extends SpeakeasyBase {
    /**
     * Categories identified in the input document.
     */
    categories?: ClassificationCategory[];
    /**
     * Represents the feeling associated with the entire text or entities in the text.
     */
    documentSentiment?: Sentiment;
    /**
     * Entities, along with their semantic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_entities.
     */
    entities?: Entity[];
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string;
    /**
     * Sentences in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.
     */
    sentences?: Sentence[];
    /**
     * Tokens, along with their syntactic information, in the input document. Populated if the user enables AnnotateTextRequest.Features.extract_syntax.
     */
    tokens?: Token[];
}
