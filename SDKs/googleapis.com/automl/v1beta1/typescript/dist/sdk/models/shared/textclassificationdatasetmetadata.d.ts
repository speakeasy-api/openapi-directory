import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Type of the classification problem.
 */
export declare enum TextClassificationDatasetMetadataClassificationTypeEnum {
    ClassificationTypeUnspecified = "CLASSIFICATION_TYPE_UNSPECIFIED",
    Multiclass = "MULTICLASS",
    Multilabel = "MULTILABEL"
}
/**
 * Dataset metadata for classification.
 */
export declare class TextClassificationDatasetMetadata extends SpeakeasyBase {
    /**
     * Required. Type of the classification problem.
     */
    classificationType?: TextClassificationDatasetMetadataClassificationTypeEnum;
}
