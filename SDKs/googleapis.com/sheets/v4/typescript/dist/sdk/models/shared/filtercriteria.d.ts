import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
export declare class FilterCriteria extends SpeakeasyBase {
    condition?: BooleanCondition;
    hiddenValues?: string[];
    visibleBackgroundColor?: Color;
    visibleBackgroundColorStyle?: ColorStyle;
    visibleForegroundColor?: Color;
    visibleForegroundColorStyle?: ColorStyle;
}
