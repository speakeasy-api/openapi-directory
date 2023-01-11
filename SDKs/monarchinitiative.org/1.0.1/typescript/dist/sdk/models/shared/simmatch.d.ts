import { SpeakeasyBase } from "../../../internal/utils";
import { PairwiseMatch } from "./pairwisematch";
import { Node } from "./node";
export declare class SimMatch extends SpeakeasyBase {
    id: string;
    label?: string;
    pairwiseMatch?: PairwiseMatch[];
    rank?: string;
    score?: number;
    significance?: string;
    taxon?: Node;
    type?: string;
}
