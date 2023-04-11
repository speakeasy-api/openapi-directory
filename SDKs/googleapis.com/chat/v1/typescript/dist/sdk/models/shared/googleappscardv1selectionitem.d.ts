import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A selectable item in a selection input, such as a check box or a switch.
 */
export declare class GoogleAppsCardV1SelectionItem extends SpeakeasyBase {
    /**
     * When `true`, more than one item is selected. If more than one item is selected for radio buttons and dropdown menus, the first selected item is received and the ones after are ignored.
     */
    selected?: boolean;
    /**
     * The text displayed to users.
     */
    text?: string;
    /**
     * The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    value?: string;
}
