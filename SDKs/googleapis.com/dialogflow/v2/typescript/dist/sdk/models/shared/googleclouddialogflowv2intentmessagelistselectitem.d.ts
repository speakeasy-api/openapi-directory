import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageSelectItemInfo } from "./googleclouddialogflowv2intentmessageselectiteminfo";
/**
 * An item in the list.
 */
export declare class GoogleCloudDialogflowV2IntentMessageListSelectItem extends SpeakeasyBase {
    /**
     * Optional. The main text describing the item.
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
     * Required. The title of the list item.
     */
    title?: string;
}
