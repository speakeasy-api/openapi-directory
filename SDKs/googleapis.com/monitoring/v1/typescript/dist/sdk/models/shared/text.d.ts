import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How the text content is formatted.
 */
export declare enum TextFormatEnum {
    FormatUnspecified = "FORMAT_UNSPECIFIED",
    Markdown = "MARKDOWN",
    Raw = "RAW"
}
/**
 * A widget that displays textual content.
 */
export declare class Text extends SpeakeasyBase {
    /**
     * The text content to be displayed.
     */
    content?: string;
    /**
     * How the text content is formatted.
     */
    format?: TextFormatEnum;
}
