import { SpeakeasyBase } from "../../../internal/utils";
import { SynonymPropertyValue } from "./synonympropertyvalue";
export declare class Relation extends SpeakeasyBase {
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
    replacedBy?: string[];
    /**
     * list of synonyms or alternate labels
     */
    synonyms?: SynonymPropertyValue[];
    types?: string[];
}
