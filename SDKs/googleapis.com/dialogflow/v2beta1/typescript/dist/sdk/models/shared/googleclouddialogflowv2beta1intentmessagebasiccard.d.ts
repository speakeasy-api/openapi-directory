import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton } from "./googleclouddialogflowv2beta1intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
/**
 * The basic card message. Useful for displaying information.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageBasicCard extends SpeakeasyBase {
    /**
     * Optional. The collection of card buttons.
     */
    buttons?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
    /**
     * Required, unless image is present. The body text of the card.
     */
    formattedText?: string;
    /**
     * The image response message.
     */
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Optional. The subtitle of the card.
     */
    subtitle?: string;
    /**
     * Optional. The title of the card.
     */
    title?: string;
}
