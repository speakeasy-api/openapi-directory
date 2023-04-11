import { SpeakeasyBase } from "../../../internal/utils";
import { OnClick } from "./onclick";
/**
 * A button with text and onclick action.
 */
export declare class TextButton extends SpeakeasyBase {
    /**
     * An onclick action (e.g. open a link).
     */
    onClick?: OnClick;
    /**
     * The text of the button.
     */
    text?: string;
}
