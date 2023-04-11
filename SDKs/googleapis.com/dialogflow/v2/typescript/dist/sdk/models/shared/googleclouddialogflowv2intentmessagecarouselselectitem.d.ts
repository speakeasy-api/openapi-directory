import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageSelectItemInfo } from "./googleclouddialogflowv2intentmessageselectiteminfo";
/**
 * An item in the carousel.
 */
export declare class GoogleCloudDialogflowV2IntentMessageCarouselSelectItem extends SpeakeasyBase {
    /**
     * Optional. The body text of the card.
     */
    description?: string;
    /**
     * The image response message.
     */
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Additional info about the select item for when it is triggered in a dialog.
     */
    info?: GoogleCloudDialogflowV2IntentMessageSelectItemInfo;
    /**
     * Required. Title of the carousel item.
     */
    title?: string;
}
