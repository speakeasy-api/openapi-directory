import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Type of the article suggestion model. If not provided, model_type is used.
 */
export declare enum GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum {
    ModelTypeUnspecified = "MODEL_TYPE_UNSPECIFIED",
    SmartReplyDualEncoderModel = "SMART_REPLY_DUAL_ENCODER_MODEL",
    SmartReplyBertModel = "SMART_REPLY_BERT_MODEL"
}
/**
 * Metadata for article suggestion models.
 */
export declare class GoogleCloudDialogflowV2ArticleSuggestionModelMetadata extends SpeakeasyBase {
    /**
     * Optional. Type of the article suggestion model. If not provided, model_type is used.
     */
    trainingModelType?: GoogleCloudDialogflowV2ArticleSuggestionModelMetadataTrainingModelTypeEnum;
}
