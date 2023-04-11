import { SpeakeasyBase } from "../../../internal/utils";
import { SequencePosition } from "./sequenceposition";
import { SynonymPropertyValue } from "./synonympropertyvalue";
import { Taxon } from "./taxon";
export declare class SequenceLocation extends SpeakeasyBase {
    /**
     * association counts
     */
    associationCounts?: Record<string, any>;
    category?: string[];
    consider?: string[];
    /**
     * True if the node is deprecated/obsoleted.
     */
    deprecated?: boolean;
    /**
     * Descriptive text for the entity. For ontology classes, this will be a definition.
     */
    description?: string;
    end?: SequencePosition;
    /**
     * ID or CURIE e.g. MGI:1201606
     */
    id: string;
    /**
     * IRI
     */
    iri?: string;
    /**
     * RDFS Label
     */
    label?: string;
    phase?: number;
    replacedBy?: string[];
    score?: number;
    start?: SequencePosition;
    /**
     * Strand direction: 1=='+', -1=='-', 0 or null infers unknown.
     */
    strand?: number;
    /**
     * list of synonyms or alternate labels
     */
    synonyms?: SynonymPropertyValue[];
    /**
     * Taxon to which the object belongs
     */
    taxon?: Taxon;
    types?: string[];
    /**
     * Database cross-references. These are usually CURIEs, but may also be URLs. E.g. ENSEMBL:ENSG00000099940
     */
    xrefs?: string[];
}
