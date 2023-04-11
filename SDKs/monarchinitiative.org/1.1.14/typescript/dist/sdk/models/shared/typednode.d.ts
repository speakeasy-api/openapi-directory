import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
export declare class TypedNode extends SpeakeasyBase {
    /**
     * ID or CURIE e.g. MGI:1201606
     */
    id: string;
    /**
     * RDFS Label
     */
    label?: string;
    /**
     * taxon
     */
    taxon?: Node;
    /**
     * node type (eg phenotype, disease)
     */
    type?: string;
}
