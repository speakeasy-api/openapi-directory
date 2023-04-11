import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2InputConfig } from "./googleclouddialogflowv2inputconfig";
/**
 * The request message for ConversationDatasets.ImportConversationData.
 */
export declare class GoogleCloudDialogflowV2ImportConversationDataRequest extends SpeakeasyBase {
    /**
     * Represents the configuration of importing a set of conversation files in Google Cloud Storage.
     */
    inputConfig?: GoogleCloudDialogflowV2InputConfig;
}
