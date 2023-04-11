import { SpeakeasyBase } from "../../../internal/utils";
import { GlossaryTermsPair } from "./glossarytermspair";
import { GlossaryTermsSet } from "./glossarytermsset";
/**
 * Represents a single entry in a glossary.
 */
export declare class GlossaryEntry extends SpeakeasyBase {
    /**
     * Describes the glossary entry.
     */
    description?: string;
    /**
     * Required. The resource name of the entry. Format: "projects/* /locations/* /glossaries/* /glossaryEntries/*"
     */
    name?: string;
    /**
     * Represents a single entry for an unidirectional glossary.
     */
    termsPair?: GlossaryTermsPair;
    /**
     * Represents a single entry for an equivalent term set glossary. This is used for equivalent term sets where each term can be replaced by the other terms in the set.
     */
    termsSet?: GlossaryTermsSet;
}
