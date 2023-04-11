import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageBasicCardButton } from "./googleclouddialogflowv2intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2IntentMessageColumnProperties } from "./googleclouddialogflowv2intentmessagecolumnproperties";
import { GoogleCloudDialogflowV2IntentMessageImage } from "./googleclouddialogflowv2intentmessageimage";
import { GoogleCloudDialogflowV2IntentMessageTableCardRow } from "./googleclouddialogflowv2intentmessagetablecardrow";
/**
 * Table card for Actions on Google.
 */
export declare class GoogleCloudDialogflowV2IntentMessageTableCard extends SpeakeasyBase {
    /**
     * Optional. List of buttons for the card.
     */
    buttons?: GoogleCloudDialogflowV2IntentMessageBasicCardButton[];
    /**
     * Optional. Display properties for the columns in this table.
     */
    columnProperties?: GoogleCloudDialogflowV2IntentMessageColumnProperties[];
    /**
     * The image response message.
     */
    image?: GoogleCloudDialogflowV2IntentMessageImage;
    /**
     * Optional. Rows in this table of data.
     */
    rows?: GoogleCloudDialogflowV2IntentMessageTableCardRow[];
    /**
     * Optional. Subtitle to the title.
     */
    subtitle?: string;
    /**
     * Required. Title of the card.
     */
    title?: string;
}
