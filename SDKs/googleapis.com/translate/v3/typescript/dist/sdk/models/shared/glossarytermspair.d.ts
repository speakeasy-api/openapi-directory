import { SpeakeasyBase } from "../../../internal/utils";
import { GlossaryTerm } from "./glossaryterm";
/**
 * Represents a single entry for an unidirectional glossary.
 */
export declare class GlossaryTermsPair extends SpeakeasyBase {
    /**
     * Represents a single glossary term
     */
    sourceTerm?: GlossaryTerm;
    /**
     * Represents a single glossary term
     */
    targetTerm?: GlossaryTerm;
}
