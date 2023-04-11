import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo } from "./googleclouddialogflowv2beta1intentmessageselectiteminfo";
/**
 * An item in the carousel.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageCarouselSelectItem extends SpeakeasyBase {
    /**
     * Optional. The body text of the card.
     */
    description?: string;
    /**
     * The image response message.
     */
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Additional info about the select item for when it is triggered in a dialog.
     */
    info?: GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo;
    /**
     * Required. Title of the carousel item.
     */
    title?: string;
}
