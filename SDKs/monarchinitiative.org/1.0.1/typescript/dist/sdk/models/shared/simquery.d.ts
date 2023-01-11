import { SpeakeasyBase } from "../../../internal/utils";
import { Node } from "./node";
import { TypedNode } from "./typednode";
export declare class SimQuery extends SpeakeasyBase {
    ids?: Node[];
    negatedIds?: Node[];
    reference?: TypedNode;
    targetIds?: Node[][];
    unresolvedIds?: string[];
}
