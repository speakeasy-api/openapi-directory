import { SpeakeasyBase } from "../../../internal/utils";
import { Sentiment } from "./sentiment";
import { TextSpan } from "./textspan";
/**
 * Represents a sentence in the input document.
 */
export declare class Sentence extends SpeakeasyBase {
    /**
     * Represents the feeling associated with the entire text or entities in the text. Next ID: 6
     */
    sentiment?: Sentiment;
    /**
     * Represents an output piece of text.
     */
    text?: TextSpan;
}
