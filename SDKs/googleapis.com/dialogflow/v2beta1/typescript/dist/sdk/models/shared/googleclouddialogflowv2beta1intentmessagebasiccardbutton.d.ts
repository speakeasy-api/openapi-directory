import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction } from "./googleclouddialogflowv2beta1intentmessagebasiccardbuttonopenuriaction";
/**
 * The button object that appears at the bottom of a card.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton extends SpeakeasyBase {
    /**
     * Opens the given URI.
     */
    openUriAction?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenUriAction;
    /**
     * Required. The title of the button.
     */
    title?: string;
}
