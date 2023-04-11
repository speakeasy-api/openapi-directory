import { SpeakeasyBase } from "../../../internal/utils";
import { DependencyEdge } from "./dependencyedge";
import { PartOfSpeech } from "./partofspeech";
import { TextSpan } from "./textspan";
/**
 * Represents the smallest syntactic building block of the text.
 */
export declare class Token extends SpeakeasyBase {
    /**
     * Represents dependency parse tree information for a token. (For more information on dependency labels, see http://www.aclweb.org/anthology/P13-2017
     */
    dependencyEdge?: DependencyEdge;
    /**
     * [Lemma](https://en.wikipedia.org/wiki/Lemma_%28morphology%29) of the token.
     */
    lemma?: string;
    /**
     * Represents part of speech information for a token. Parts of speech are as defined in http://www.lrec-conf.org/proceedings/lrec2012/pdf/274_Paper.pdf
     */
    partOfSpeech?: PartOfSpeech;
    /**
     * Represents an output piece of text.
     */
    text?: TextSpan;
}
