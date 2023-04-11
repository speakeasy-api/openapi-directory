import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageTableCardCell } from "./googleclouddialogflowv2beta1intentmessagetablecardcell";
/**
 * Row of TableCard.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageTableCardRow extends SpeakeasyBase {
    /**
     * Optional. List of cells that make up this row.
     */
    cells?: GoogleCloudDialogflowV2beta1IntentMessageTableCardCell[];
    /**
     * Optional. Whether to add a visual divider after this row.
     */
    dividerAfter?: boolean;
}
