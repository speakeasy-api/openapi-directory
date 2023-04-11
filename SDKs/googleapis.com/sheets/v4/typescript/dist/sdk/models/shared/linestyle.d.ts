import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The dash type of the line.
 */
export declare enum LineStyleTypeEnum {
    LineDashTypeUnspecified = "LINE_DASH_TYPE_UNSPECIFIED",
    Invisible = "INVISIBLE",
    Custom = "CUSTOM",
    Solid = "SOLID",
    Dotted = "DOTTED",
    MediumDashed = "MEDIUM_DASHED",
    MediumDashedDotted = "MEDIUM_DASHED_DOTTED",
    LongDashed = "LONG_DASHED",
    LongDashedDotted = "LONG_DASHED_DOTTED"
}
/**
 * Properties that describe the style of a line.
 */
export declare class LineStyle extends SpeakeasyBase {
    /**
     * The dash type of the line.
     */
    type?: LineStyleTypeEnum;
    /**
     * The thickness of the line, in px.
     */
    width?: number;
}
