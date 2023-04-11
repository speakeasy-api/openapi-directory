import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Position of the media.
 */
export declare enum MediaPropertiesAlignmentEnum {
    AlignmentUnspecified = "ALIGNMENT_UNSPECIFIED",
    Left = "LEFT",
    Right = "RIGHT",
    Center = "CENTER"
}
/**
 * Properties of the media.
 */
export declare class MediaProperties extends SpeakeasyBase {
    /**
     * Position of the media.
     */
    alignment?: MediaPropertiesAlignmentEnum;
    /**
     * The width of the media in pixels. When the media is displayed, it is scaled to the smaller of this value or the width of the displayed form. The original aspect ratio of the media is preserved. If a width is not specified when the media is added to the form, it is set to the width of the media source. Width must be between 0 and 740, inclusive. Setting width to 0 or unspecified is only permitted when updating the media source.
     */
    width?: number;
}
