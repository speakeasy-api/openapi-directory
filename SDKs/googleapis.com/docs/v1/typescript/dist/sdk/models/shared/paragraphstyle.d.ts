import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
import { ParagraphBorder } from "./paragraphborder";
import { Shading } from "./shading";
import { TabStop } from "./tabstop";
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
 * The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since paragraph direction is not inherited.
 */
export declare enum ParagraphStyleDirectionEnum {
    ContentDirectionUnspecified = "CONTENT_DIRECTION_UNSPECIFIED",
    LeftToRight = "LEFT_TO_RIGHT",
    RightToLeft = "RIGHT_TO_LEFT"
}
/**
 * The named style type of the paragraph. Since updating the named style type affects other properties within ParagraphStyle, the named style type is applied before the other properties are updated.
 */
export declare enum ParagraphStyleNamedStyleTypeEnum {
    NamedStyleTypeUnspecified = "NAMED_STYLE_TYPE_UNSPECIFIED",
    NormalText = "NORMAL_TEXT",
    Title = "TITLE",
    Subtitle = "SUBTITLE",
    Heading1 = "HEADING_1",
    Heading2 = "HEADING_2",
    Heading3 = "HEADING_3",
    Heading4 = "HEADING_4",
    Heading5 = "HEADING_5",
    Heading6 = "HEADING_6"
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
 * Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
 */
export declare class ParagraphStyle extends SpeakeasyBase {
    /**
     * The text alignment for this paragraph.
     */
    alignment?: ParagraphStyleAlignmentEnum;
    /**
     * Whether to avoid widows and orphans for the paragraph. If unset, the value is inherited from the parent.
     */
    avoidWidowAndOrphan?: boolean;
    /**
     * A border around a paragraph.
     */
    borderBetween?: ParagraphBorder;
    /**
     * A border around a paragraph.
     */
    borderBottom?: ParagraphBorder;
    /**
     * A border around a paragraph.
     */
    borderLeft?: ParagraphBorder;
    /**
     * A border around a paragraph.
     */
    borderRight?: ParagraphBorder;
    /**
     * A border around a paragraph.
     */
    borderTop?: ParagraphBorder;
    /**
     * The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since paragraph direction is not inherited.
     */
    direction?: ParagraphStyleDirectionEnum;
    /**
     * The heading ID of the paragraph. If empty, then this paragraph is not a heading. This property is read-only.
     */
    headingId?: string;
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
     * Whether all lines of the paragraph should be laid out on the same page or column if possible. If unset, the value is inherited from the parent.
     */
    keepLinesTogether?: boolean;
    /**
     * Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if possible. If unset, the value is inherited from the parent.
     */
    keepWithNext?: boolean;
    /**
     * The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.
     */
    lineSpacing?: number;
    /**
     * The named style type of the paragraph. Since updating the named style type affects other properties within ParagraphStyle, the named style type is applied before the other properties are updated.
     */
    namedStyleType?: ParagraphStyleNamedStyleTypeEnum;
    /**
     * Whether the current paragraph should always start at the beginning of a page. If unset, the value is inherited from the parent. Attempting to update page_break_before for paragraphs in unsupported regions, including Table, Header, Footer and Footnote, can result in an invalid document state that returns a 400 bad request error.
     */
    pageBreakBefore?: boolean;
    /**
     * The shading of a paragraph.
     */
    shading?: Shading;
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
    /**
     * A list of the tab stops for this paragraph. The list of tab stops is not inherited. This property is read-only.
     */
    tabStops?: TabStop[];
}
