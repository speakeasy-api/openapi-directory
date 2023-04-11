import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * The entity-level sentiment analysis response message.
 */
export declare class AnalyzeEntitySentimentResponse extends SpeakeasyBase {
    /**
     * The recognized entities in the input document with associated sentiments.
     */
    entities?: Entity[];
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string;
}
