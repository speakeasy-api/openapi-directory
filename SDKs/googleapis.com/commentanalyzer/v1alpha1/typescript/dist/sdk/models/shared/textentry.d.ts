import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the text field.
 */
export declare enum TextEntryTypeEnum {
    TextTypeUnspecified = "TEXT_TYPE_UNSPECIFIED",
    PlainText = "PLAIN_TEXT",
    Html = "HTML"
}
/**
 * Represents a body of text.
 */
export declare class TextEntry extends SpeakeasyBase {
    /**
     * UTF-8 encoded text.
     */
    text?: string;
    /**
     * Type of the text field.
     */
    type?: TextEntryTypeEnum;
}
