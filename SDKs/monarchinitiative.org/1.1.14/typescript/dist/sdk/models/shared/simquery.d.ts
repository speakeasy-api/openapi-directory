import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
import { TypedNode } from "./typednode";
export declare class SimQuery extends SpeakeasyBase {
    ids?: Node[];
    negatedIds?: Node[];
    /**
     * reference individual or class (eg gene, disease)
     */
    reference?: TypedNode;
    targetIds?: Node[][];
    /**
     * list of unresolved ids
     */
    unresolvedIds?: string[];
}
