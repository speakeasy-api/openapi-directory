import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1Action } from "./googleappscardv1action";
import { GoogleAppsCardV1SelectionItem } from "./googleappscardv1selectionitem";
/**
 * The way that an option appears to users. Different options support different types of interactions. For example, users can enable multiple check boxes, but can only select one value from a dropdown menu. Each selection input supports one type of selection. Mixing check boxes and switches, for example, is not supported.
 */
export declare enum GoogleAppsCardV1SelectionInputTypeEnum {
    CheckBox = "CHECK_BOX",
    RadioButton = "RADIO_BUTTON",
    Switch = "SWITCH",
    Dropdown = "DROPDOWN"
}
/**
 * A widget that creates a UI item with options for users to select. For example, a dropdown menu or check list. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect data from users that matches options you set, use a selection input. To collect abstract data from users, use the text input widget instead.
 */
export declare class GoogleAppsCardV1SelectionInput extends SpeakeasyBase {
    /**
     * An array of the selected items. For example, all the selected check boxes.
     */
    items?: GoogleAppsCardV1SelectionItem[];
    /**
     * The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency".
     */
    label?: string;
    /**
     * The name by which the selection input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs).
     */
    name?: string;
    /**
     * An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form. If the action is triggered, the form values are sent to the server.
     */
    onChangeAction?: GoogleAppsCardV1Action;
    /**
     * The way that an option appears to users. Different options support different types of interactions. For example, users can enable multiple check boxes, but can only select one value from a dropdown menu. Each selection input supports one type of selection. Mixing check boxes and switches, for example, is not supported.
     */
    type?: GoogleAppsCardV1SelectionInputTypeEnum;
}
