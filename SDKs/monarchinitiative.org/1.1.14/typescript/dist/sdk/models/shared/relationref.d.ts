import { SpeakeasyBase } from "../../../internal/utils";
export declare class RelationRef extends SpeakeasyBase {
    category?: string[];
    /**
     * ID or CURIE e.g. MGI:1201606
     */
    id: string;
    /**
     * is relation inverted
     */
    inverse?: boolean;
    /**
     * IRI
     */
    iri?: string;
    /**
     * RDFS Label
     */
    label?: string;
}
