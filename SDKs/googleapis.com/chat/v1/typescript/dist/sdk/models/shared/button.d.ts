import { SpeakeasyBase } from "../../../internal/utils";
import { ImageButton } from "./imagebutton";
import { TextButton } from "./textbutton";
/**
 * A button. Can be a text button or an image button.
 */
export declare class Button extends SpeakeasyBase {
    /**
     * An image button with an onclick action.
     */
    imageButton?: ImageButton;
    /**
     * A button with text and onclick action.
     */
    textButton?: TextButton;
}
