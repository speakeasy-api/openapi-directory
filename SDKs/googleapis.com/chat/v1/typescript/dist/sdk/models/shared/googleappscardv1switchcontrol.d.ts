import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
/**
 * How the switch appears in the user interface.
 */
export declare enum GoogleAppsCardV1SwitchControlControlTypeEnum {
    Switch = "SWITCH",
    Checkbox = "CHECKBOX",
    CheckBox = "CHECK_BOX"
}
/**
 * Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget.
 */
export declare class GoogleAppsCardV1SwitchControl extends SpeakeasyBase {
    /**
     * How the switch appears in the user interface.
     */
    controlType?: GoogleAppsCardV1SwitchControlControlTypeEnum;
    /**
     * The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    name?: string;
    /**
     * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
     */
    onChangeAction?: GoogleAppsCardV1Action;
    /**
     * When `true`, the switch is selected.
     */
    selected?: boolean;
    /**
     * The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    value?: string;
}
