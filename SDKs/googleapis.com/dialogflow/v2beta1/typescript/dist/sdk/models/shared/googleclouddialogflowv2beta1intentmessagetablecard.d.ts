import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton } from "./googleclouddialogflowv2beta1intentmessagebasiccardbutton";
import { GoogleCloudDialogflowV2beta1IntentMessageColumnProperties } from "./googleclouddialogflowv2beta1intentmessagecolumnproperties";
import { GoogleCloudDialogflowV2beta1IntentMessageImage } from "./googleclouddialogflowv2beta1intentmessageimage";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCardRow } from "./googleclouddialogflowv2beta1intentmessagetablecardrow";
/**
 * Table card for Actions on Google.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageTableCard extends SpeakeasyBase {
    /**
     * Optional. List of buttons for the card.
     */
    buttons?: GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton[];
    /**
     * Optional. Display properties for the columns in this table.
     */
    columnProperties?: GoogleCloudDialogflowV2beta1IntentMessageColumnProperties[];
    /**
     * The image response message.
     */
    image?: GoogleCloudDialogflowV2beta1IntentMessageImage;
    /**
     * Optional. Rows in this table of data.
     */
    rows?: GoogleCloudDialogflowV2beta1IntentMessageTableCardRow[];
    /**
     * Optional. Subtitle to the title.
     */
    subtitle?: string;
    /**
     * Required. Title of the card.
     */
    title?: string;
}
