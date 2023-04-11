import { SpeakeasyBase } from "../../../internal/utils";
import { Sentence } from "./sentence";
import { Token } from "./token";
/**
 * The syntax analysis response message.
 */
export declare class AnalyzeSyntaxResponse extends SpeakeasyBase {
    /**
     * The language of the text, which will be the same as the language specified in the request or, if not specified, the automatically-detected language. See Document.language field for more details.
     */
    language?: string;
    /**
     * Sentences in the input document.
     */
    sentences?: Sentence[];
    /**
     * Tokens, along with their syntactic information, in the input document.
     */
    tokens?: Token[];
}
