import { SpeakeasyBase } from "../../../internal/utils";
import { CareContextDefinition } from "./carecontextdefinition";
import { HITypeEnumEnum } from "./hitypeenumenum";
export declare class EventCategoryDetail extends SpeakeasyBase {
    careContext: CareContextDefinition;
    hiTypes: HITypeEnumEnum[];
}
