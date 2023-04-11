import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction } from "./googleclouddialogflowv2intentmessagebasiccardbuttonopenuriaction";
/**
 * The button object that appears at the bottom of a card.
 */
export declare class GoogleCloudDialogflowV2IntentMessageBasicCardButton extends SpeakeasyBase {
    /**
     * Opens the given URI.
     */
    openUriAction?: GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenUriAction;
    /**
     * Required. The title of the button.
     */
    title?: string;
}
