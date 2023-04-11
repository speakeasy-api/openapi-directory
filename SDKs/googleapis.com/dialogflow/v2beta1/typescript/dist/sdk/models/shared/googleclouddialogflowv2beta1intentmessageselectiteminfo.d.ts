import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional info about the select item for when it is triggered in a dialog.
 */
export declare class GoogleCloudDialogflowV2beta1IntentMessageSelectItemInfo extends SpeakeasyBase {
    /**
     * Required. A unique key that will be sent back to the agent if this response is given.
     */
    key?: string;
    /**
     * Optional. A list of synonyms that can also be used to trigger this item in dialog.
     */
    synonyms?: string[];
}
