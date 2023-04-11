import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageCardButton } from "./googleclouddialogflowv2beta1intentmessagecardbutton";
/**
 * The card response message.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageCard extends SpeakeasyBase {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: GoogleCloudDialogflowV2beta1IntentMessageCardButton[];
    /**
     * Optional. The public URI to an image file for the card.
     */
    imageUri?: string;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string;
    /**
     * Optional. The title of the card.
     */
    title?: string;
}
