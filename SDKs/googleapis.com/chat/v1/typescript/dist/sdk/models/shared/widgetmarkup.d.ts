import { SpeakeasyBase } from "../../../internal/utils";
import { Button } from "./button";
import { Image } from "./image";
import { KeyValue } from "./keyvalue";
import { TextParagraph } from "./textparagraph";
/**
 * A widget is a UI element that presents texts, images, etc.
 */
export declare class WidgetMarkup extends SpeakeasyBase {
    /**
     * A list of buttons. Buttons is also oneof data and only one of these fields should be set.
     */
    buttons?: Button[];
    /**
     * An image that is specified by a URL and can have an onclick action.
     */
    image?: Image;
    /**
     * A UI element contains a key (label) and a value (content). And this element may also contain some actions such as onclick button.
     */
    keyValue?: KeyValue;
    /**
     * A paragraph of text. Formatted text supported.
     */
    textParagraph?: TextParagraph;
}
