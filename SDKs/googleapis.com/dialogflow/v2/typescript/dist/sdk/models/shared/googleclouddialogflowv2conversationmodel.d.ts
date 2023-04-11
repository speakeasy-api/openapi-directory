import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ArticleSuggestionModelMetadata } from "./googleclouddialogflowv2articlesuggestionmodelmetadata";
import { GoogleCloudDialogflowV2InputDataset } from "./googleclouddialogflowv2inputdataset";
import { GoogleCloudDialogflowV2SmartReplyModelMetadata } from "./googleclouddialogflowv2smartreplymodelmetadata";
/**
 * Output only. State of the model. A model can only serve prediction requests after it gets deployed.
 */
export declare enum GoogleCloudDialogflowV2ConversationModelStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Undeployed = "UNDEPLOYED",
    Deploying = "DEPLOYING",
    Deployed = "DEPLOYED",
    Undeploying = "UNDEPLOYING",
    Deleting = "DELETING",
    Failed = "FAILED",
    Pending = "PENDING"
}
/**
 * Represents a conversation model.
 */
export declare class GoogleCloudDialogflowV2ConversationModel extends SpeakeasyBase {
    /**
     * Metadata for article suggestion models.
     */
    articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
    /**
     * Output only. Creation time of this model.
     */
    createTime?: string;
    /**
     * Required. Datasets used to create model.
     */
    datasets?: GoogleCloudDialogflowV2InputDataset[];
    /**
     * Required. The display name of the model. At most 64 bytes long.
     */
    displayName?: string;
    /**
     * Language code for the conversation model. If not specified, the language is en-US. Language at ConversationModel should be set for all non en-us languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string;
    /**
     * ConversationModel resource name. Format: `projects//conversationModels/`
     */
    name?: string;
    /**
     * Metadata for smart reply models.
     */
    smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
    /**
     * Output only. State of the model. A model can only serve prediction requests after it gets deployed.
     */
    state?: GoogleCloudDialogflowV2ConversationModelStateEnum;
}
/**
 * Represents a conversation model.
 */
export declare class GoogleCloudDialogflowV2ConversationModelInput extends SpeakeasyBase {
    /**
     * Metadata for article suggestion models.
     */
    articleSuggestionModelMetadata?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadata;
    /**
     * Required. Datasets used to create model.
     */
    datasets?: GoogleCloudDialogflowV2InputDataset[];
    /**
     * Required. The display name of the model. At most 64 bytes long.
     */
    displayName?: string;
    /**
     * Language code for the conversation model. If not specified, the language is en-US. Language at ConversationModel should be set for all non en-us languages. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string;
    /**
     * ConversationModel resource name. Format: `projects//conversationModels/`
     */
    name?: string;
    /**
     * Metadata for smart reply models.
     */
    smartReplyModelMetadata?: GoogleCloudDialogflowV2SmartReplyModelMetadata;
}
