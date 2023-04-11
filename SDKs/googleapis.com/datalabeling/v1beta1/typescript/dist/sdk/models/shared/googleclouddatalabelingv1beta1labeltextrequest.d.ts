import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1HumanAnnotationConfig } from "./googleclouddatalabelingv1beta1humanannotationconfig";
import { GoogleCloudDatalabelingV1beta1TextClassificationConfig } from "./googleclouddatalabelingv1beta1textclassificationconfig";
import { GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig } from "./googleclouddatalabelingv1beta1textentityextractionconfig";
/**
 * Required. The type of text labeling task.
 */
export declare enum GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum {
    FeatureUnspecified = "FEATURE_UNSPECIFIED",
    TextClassification = "TEXT_CLASSIFICATION",
    TextEntityExtraction = "TEXT_ENTITY_EXTRACTION"
}
/**
 * Request message for LabelText.
 */
export declare class GoogleCloudDatalabelingV1beta1LabelTextRequest extends SpeakeasyBase {
    /**
     * Configuration for how human labeling task should be done.
     */
    basicConfig?: GoogleCloudDatalabelingV1beta1HumanAnnotationConfig;
    /**
     * Required. The type of text labeling task.
     */
    feature?: GoogleCloudDatalabelingV1beta1LabelTextRequestFeatureEnum;
    /**
     * Config for text classification human labeling task.
     */
    textClassificationConfig?: GoogleCloudDatalabelingV1beta1TextClassificationConfig;
    /**
     * Config for text entity extraction human labeling task.
     */
    textEntityExtractionConfig?: GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig;
}
