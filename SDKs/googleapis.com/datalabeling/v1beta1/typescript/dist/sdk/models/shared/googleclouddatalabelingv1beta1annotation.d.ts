import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationMetadata } from "./googleclouddatalabelingv1beta1annotationmetadata";
import { GoogleCloudDatalabelingV1beta1AnnotationValue } from "./googleclouddatalabelingv1beta1annotationvalue";
/**
 * Output only. Sentiment for this annotation.
 */
export declare enum GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum {
    AnnotationSentimentUnspecified = "ANNOTATION_SENTIMENT_UNSPECIFIED",
    Negative = "NEGATIVE",
    Positive = "POSITIVE"
}
/**
 * Output only. The source of the annotation.
 */
export declare enum GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum {
    AnnotationSourceUnspecified = "ANNOTATION_SOURCE_UNSPECIFIED",
    Operator = "OPERATOR"
}
/**
 * Annotation for Example. Each example may have one or more annotations. For example in image classification problem, each image might have one or more labels. We call labels binded with this image an Annotation.
 */
export declare class GoogleCloudDatalabelingV1beta1Annotation extends SpeakeasyBase {
    /**
     * Additional information associated with the annotation.
     */
    annotationMetadata?: GoogleCloudDatalabelingV1beta1AnnotationMetadata;
    /**
     * Output only. Sentiment for this annotation.
     */
    annotationSentiment?: GoogleCloudDatalabelingV1beta1AnnotationAnnotationSentimentEnum;
    /**
     * Output only. The source of the annotation.
     */
    annotationSource?: GoogleCloudDatalabelingV1beta1AnnotationAnnotationSourceEnum;
    /**
     * Annotation value for an example.
     */
    annotationValue?: GoogleCloudDatalabelingV1beta1AnnotationValue;
    /**
     * Output only. Unique name of this annotation, format is: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/{annotated_dataset}/examples/{example_id}/annotations/{annotation_id}
     */
    name?: string;
}
