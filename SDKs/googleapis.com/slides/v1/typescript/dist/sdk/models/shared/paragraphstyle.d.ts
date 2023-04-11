import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * The text alignment for this paragraph.
 */
export declare enum ParagraphStyleAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED",
    Start = "START",
    Center = "CENTER",
    End = "END",
    Justified = "JUSTIFIED"
}
/**
 * The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.
 */
export declare enum ParagraphStyleDirectionEnum {
    TextDirectionUnspecified = "TEXT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}
/**
 * The spacing mode for the paragraph.
 */
export declare enum ParagraphStyleSpacingModeEnum {
    SpacingModeUnspecified = "SPACING_MODE_UNSPECIFIED",
    NeverCollapse = "NEVER_COLLAPSE",
    CollapseLists = "COLLAPSE_LISTS"
}
/**
 * Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message.
 */
export declare class ParagraphStyle extends SpeakeasyBase {
    /**
     * The text alignment for this paragraph.
     */
    alignment?: ParagraphStyleAlignmentEnum;
    /**
     * The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited.
     */
    direction?: ParagraphStyleDirectionEnum;
    /**
     * A magnitude in a single direction in the specified units.
     */
    indentEnd?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    indentFirstLine?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    indentStart?: Dimension;
    /**
     * The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.
     */
    lineSpacing?: number;
    /**
     * A magnitude in a single direction in the specified units.
     */
    spaceAbove?: Dimension;
    /**
     * A magnitude in a single direction in the specified units.
     */
    spaceBelow?: Dimension;
    /**
     * The spacing mode for the paragraph.
     */
    spacingMode?: ParagraphStyleSpacingModeEnum;
}
