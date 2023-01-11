import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
export declare class PivotFilterCriteria extends SpeakeasyBase {
    condition?: BooleanCondition;
    visibleByDefault?: boolean;
    visibleValues?: string[];
}
