import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageTableCardCell } from "./googleclouddialogflowv2intentmessagetablecardcell";
/**
 * Row of TableCard.
 */
export declare class GoogleCloudDialogflowV2IntentMessageTableCardRow extends SpeakeasyBase {
    /**
     * Optional. List of cells that make up this row.
     */
    cells?: GoogleCloudDialogflowV2IntentMessageTableCardCell[];
    /**
     * Optional. Whether to add a visual divider after this row.
     */
    dividerAfter?: boolean;
}
