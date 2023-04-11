import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationInfo } from "./googleclouddialogflowv2conversationinfo";
import { GoogleCloudDialogflowV2InputConfig } from "./googleclouddialogflowv2inputconfig";
/**
 * Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
 */
export declare class GoogleCloudDialogflowV2ConversationDataset extends SpeakeasyBase {
    /**
     * Output only. The number of conversations this conversation dataset contains.
     */
    conversationCount?: string;
    /**
     * Represents metadata of a conversation.
     */
    conversationInfo?: GoogleCloudDialogflowV2ConversationInfo;
    /**
     * Output only. Creation time of this dataset.
     */
    createTime?: string;
    /**
     * Optional. The description of the dataset. Maximum of 10000 bytes.
     */
    description?: string;
    /**
     * Required. The display name of the dataset. Maximum of 64 bytes.
     */
    displayName?: string;
    /**
     * Represents the configuration of importing a set of conversation files in Google Cloud Storage.
     */
    inputConfig?: GoogleCloudDialogflowV2InputConfig;
    /**
     * Output only. ConversationDataset resource name. Format: `projects//locations//conversationDatasets/`
     */
    name?: string;
}
/**
 * Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
 */
export declare class GoogleCloudDialogflowV2ConversationDatasetInput extends SpeakeasyBase {
    /**
     * Represents metadata of a conversation.
     */
    conversationInfo?: GoogleCloudDialogflowV2ConversationInfo;
    /**
     * Optional. The description of the dataset. Maximum of 10000 bytes.
     */
    description?: string;
    /**
     * Required. The display name of the dataset. Maximum of 64 bytes.
     */
    displayName?: string;
    /**
     * Represents the configuration of importing a set of conversation files in Google Cloud Storage.
     */
    inputConfig?: GoogleCloudDialogflowV2InputConfig;
}
