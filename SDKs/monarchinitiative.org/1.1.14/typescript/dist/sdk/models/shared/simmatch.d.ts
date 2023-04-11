import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
import { PairwiseMatch } from "./pairwisematch";
export declare class SimMatch extends SpeakeasyBase {
    /**
     * ID or CURIE e.g. MGI:1201606
     */
    id: string;
    /**
     * RDFS Label
     */
    label?: string;
    pairwiseMatch?: PairwiseMatch[];
    /**
     * rank
     */
    rank?: string;
    /**
     * sim score
     */
    score?: number;
    /**
     * p-value
     */
    significance?: string;
    /**
     * taxon
     */
    taxon?: Node;
    /**
     * node type (eg phenotype, disease)
     */
    type?: string;
}
