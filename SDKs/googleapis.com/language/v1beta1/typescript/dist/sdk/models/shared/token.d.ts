import { SpeakeasyBase } from "../../../internal/utils";
import { DependencyEdge } from "./dependencyedge";
import { PartOfSpeech } from "./partofspeech";
import { TextSpan } from "./textspan";
/**
 * Represents the smallest syntactic building block of the text.
 */
export declare class Token extends SpeakeasyBase {
    /**
     * Represents dependency parse tree information for a token.
     */
    dependencyEdge?: DependencyEdge;
    /**
     * [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
     */
    lemma?: string;
    /**
     * Represents part of speech information for a token.
     */
    partOfSpeech?: PartOfSpeech;
    /**
     * Represents an output piece of text.
     */
    text?: TextSpan;
}
