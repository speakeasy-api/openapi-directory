import { SpeakeasyBase } from "../../../internal/utils";
export declare class PagespeedApiFormatStringV4ArgsRects extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
export declare class PagespeedApiFormatStringV4ArgsSecondaryRects extends SpeakeasyBase {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
}
export declare class PagespeedApiFormatStringV4Args extends SpeakeasyBase {
    /**
     * The placeholder key for this arg, as a string.
     */
    key?: string;
    /**
     * The screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. If this is absent for a SNAPSHOT_RECT argument, it means that that argument refers to the entire snapshot.
     */
    rects?: PagespeedApiFormatStringV4ArgsRects[];
    /**
     * Secondary screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments.
     */
    secondaryRects?: PagespeedApiFormatStringV4ArgsSecondaryRects[];
    /**
     * Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, DURATION, VERBATIM_STRING, PERCENTAGE, HYPERLINK, or SNAPSHOT_RECT.
     */
    type?: string;
    /**
     * Argument value, as a localized string.
     */
    value?: string;
}
export declare class PagespeedApiFormatStringV4 extends SpeakeasyBase {
    /**
     * List of arguments for the format string.
     */
    args?: PagespeedApiFormatStringV4Args[];
    /**
     * A localized format string with {{FOO}} placeholders, where 'FOO' is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key 'FOO'.
     */
    format?: string;
}
