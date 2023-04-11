import { SpeakeasyBase } from "../../../internal/utils";
import { Taxon } from "./taxon";
export declare class BioObjectCore extends SpeakeasyBase {
    category?: string[];
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
    /**
     * Taxon to which the object belongs
     */
    taxon?: Taxon;
}
