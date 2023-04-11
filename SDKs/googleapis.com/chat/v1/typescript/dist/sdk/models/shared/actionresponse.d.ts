import { SpeakeasyBase } from "../../../internal/utils";
import { DialogAction } from "./dialogaction";
/**
 * Input only. The type of Chat app response.
 */
export declare enum ActionResponseTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    NewMessage = "NEW_MESSAGE",
    UpdateMessage = "UPDATE_MESSAGE",
    UpdateUserMessageCards = "UPDATE_USER_MESSAGE_CARDS",
    RequestConfig = "REQUEST_CONFIG",
    Dialog = "DIALOG"
}
/**
 * Parameters that a Chat app can use to configure how its response is posted.
 */
export declare class ActionResponse extends SpeakeasyBase {
    /**
     * Contains a [dialog](https://developers.google.com/chat/how-tos/dialogs) and request status code.
     */
    dialogAction?: DialogAction;
    /**
     * Input only. The type of Chat app response.
     */
    type?: ActionResponseTypeEnum;
    /**
     * Input only. URL for users to auth or config. (Only for REQUEST_CONFIG response types.)
     */
    url?: string;
}
