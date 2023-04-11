import { SpeakeasyBase } from "../../../internal/utils";
import { ActionStatus } from "./actionstatus";
import { Dialog } from "./dialog";
/**
 * Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
 */
export declare class DialogAction extends SpeakeasyBase {
    /**
     * Represents the status for a request to either invoke or submit a [dialog](https://developers.google.com/chat/how-tos/dialogs).
     */
    actionStatus?: ActionStatus;
    /**
     * Wrapper around the card body of the dialog.
     */
    dialog?: Dialog;
}
