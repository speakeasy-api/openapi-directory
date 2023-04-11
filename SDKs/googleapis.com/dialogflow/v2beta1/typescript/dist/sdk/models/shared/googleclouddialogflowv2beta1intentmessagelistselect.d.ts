import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1IntentMessageListSelectItem } from "./googleclouddialogflowv2beta1intentmessagelistselectitem";
/**
 * The card for presenting a list of options to select from.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageListSelect extends SpeakeasyBase {
    /**
     * Required. List items.
     */
    items?: GoogleCloudDialogflowV2beta1IntentMessageListSelectItem[];
    /**
     * Optional. Subtitle of the list.
     */
    subtitle?: string;
    /**
     * Optional. The overall title of the list.
     */
    title?: string;
}
