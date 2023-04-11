import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Classification type of the dataset used to train this model.
 */
export declare enum TextClassificationModelMetadataClassificationTypeEnum {
    ClassificationTypeUnspecified = "CLASSIFICATION_TYPE_UNSPECIFIED",
    Multiclass = "MULTICLASS",
    Multilabel = "MULTILABEL"
}
/**
 * Model metadata that is specific to text classification.
 */
export declare class TextClassificationModelMetadata extends SpeakeasyBase {
    /**
     * Output only. Classification type of the dataset used to train this model.
     */
    classificationType?: TextClassificationModelMetadataClassificationTypeEnum;
}
