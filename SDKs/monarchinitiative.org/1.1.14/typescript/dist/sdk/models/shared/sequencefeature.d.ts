import { SpeakeasyBase } from "../../../internal/utils";
import { Association } from "./association";
import { Seq } from "./seq";
import { SequenceLocation } from "./sequencelocation";
import { SynonymPropertyValue } from "./synonympropertyvalue";
import { Taxon } from "./taxon";
export declare class SequenceFeature extends SpeakeasyBase {
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
    homologyAssociations?: Association[];
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
    locations?: SequenceLocation[];
    replacedBy?: string[];
    seq?: Seq;
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
