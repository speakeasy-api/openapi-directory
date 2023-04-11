import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2IntentMessageListSelectItem } from "./googleclouddialogflowv2intentmessagelistselectitem";
/**
 * The card for presenting a list of options to select from.
 */
export declare class GoogleCloudDialogflowV2IntentMessageListSelect extends SpeakeasyBase {
    /**
     * Required. List items.
     */
    items?: GoogleCloudDialogflowV2IntentMessageListSelectItem[];
    /**
     * Optional. Subtitle of the list.
     */
    subtitle?: string;
    /**
     * Optional. The overall title of the list.
     */
    title?: string;
}
