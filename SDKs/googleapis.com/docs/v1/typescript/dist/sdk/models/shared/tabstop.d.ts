import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * The alignment of this tab stop. If unset, the value defaults to START.
 */
export declare enum TabStopAlignmentEnum {
    TabStopAlignmentUnspecified = "TAB_STOP_ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END"
}
/**
 * A tab stop within a paragraph.
 */
export declare class TabStop extends SpeakeasyBase {
    /**
     * The alignment of this tab stop. If unset, the value defaults to START.
     */
    alignment?: TabStopAlignmentEnum;
    /**
     * A magnitude in a single direction in the specified units.
     */
    offset?: Dimension;
}
