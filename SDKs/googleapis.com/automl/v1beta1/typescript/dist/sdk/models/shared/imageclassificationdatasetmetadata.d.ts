import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Type of the classification problem.
 */
export declare enum ImageClassificationDatasetMetadataClassificationTypeEnum {
    ClassificationTypeUnspecified = "CLASSIFICATION_TYPE_UNSPECIFIED",
    Multiclass = "MULTICLASS",
    Multilabel = "MULTILABEL"
}
/**
 * Dataset metadata that is specific to image classification.
 */
export declare class ImageClassificationDatasetMetadata extends SpeakeasyBase {
    /**
     * Required. Type of the classification problem.
     */
    classificationType?: ImageClassificationDatasetMetadataClassificationTypeEnum;
}
