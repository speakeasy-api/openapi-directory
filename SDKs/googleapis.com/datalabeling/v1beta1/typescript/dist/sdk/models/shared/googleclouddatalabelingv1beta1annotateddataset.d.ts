import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata } from "./googleclouddatalabelingv1beta1annotateddatasetmetadata";
import { GoogleCloudDatalabelingV1beta1LabelStats } from "./googleclouddatalabelingv1beta1labelstats";
/**
 * Output only. Source of the annotation.
 */
export declare enum GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum {
    AnnotationSourceUnspecified = "ANNOTATION_SOURCE_UNSPECIFIED",
    Operator = "OPERATOR"
}
/**
 * Output only. Type of the annotation. It is specified when starting labeling task.
 */
export declare enum GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum {
    AnnotationTypeUnspecified = "ANNOTATION_TYPE_UNSPECIFIED",
    ImageClassificationAnnotation = "IMAGE_CLASSIFICATION_ANNOTATION",
    ImageBoundingBoxAnnotation = "IMAGE_BOUNDING_BOX_ANNOTATION",
    ImageOrientedBoundingBoxAnnotation = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION",
    ImageBoundingPolyAnnotation = "IMAGE_BOUNDING_POLY_ANNOTATION",
    ImagePolylineAnnotation = "IMAGE_POLYLINE_ANNOTATION",
    ImageSegmentationAnnotation = "IMAGE_SEGMENTATION_ANNOTATION",
    VideoShotsClassificationAnnotation = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION",
    VideoObjectTrackingAnnotation = "VIDEO_OBJECT_TRACKING_ANNOTATION",
    VideoObjectDetectionAnnotation = "VIDEO_OBJECT_DETECTION_ANNOTATION",
    VideoEventAnnotation = "VIDEO_EVENT_ANNOTATION",
    TextClassificationAnnotation = "TEXT_CLASSIFICATION_ANNOTATION",
    TextEntityExtractionAnnotation = "TEXT_ENTITY_EXTRACTION_ANNOTATION",
    GeneralClassificationAnnotation = "GENERAL_CLASSIFICATION_ANNOTATION"
}
/**
 * AnnotatedDataset is a set holding annotations for data in a Dataset. Each labeling task will generate an AnnotatedDataset under the Dataset that the task is requested for.
 */
export declare class GoogleCloudDatalabelingV1beta1AnnotatedDataset extends SpeakeasyBase {
    /**
     * Output only. Source of the annotation.
     */
    annotationSource?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationSourceEnum;
    /**
     * Output only. Type of the annotation. It is specified when starting labeling task.
     */
    annotationType?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetAnnotationTypeEnum;
    /**
     * Output only. The names of any related resources that are blocking changes to the annotated dataset.
     */
    blockingResources?: string[];
    /**
     * Output only. Number of examples that have annotation in the annotated dataset.
     */
    completedExampleCount?: string;
    /**
     * Output only. Time the AnnotatedDataset was created.
     */
    createTime?: string;
    /**
     * Output only. The description of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 10000 characters.
     */
    description?: string;
    /**
     * Output only. The display name of the AnnotatedDataset. It is specified in HumanAnnotationConfig when user starts a labeling task. Maximum of 64 characters.
     */
    displayName?: string;
    /**
     * Output only. Number of examples in the annotated dataset.
     */
    exampleCount?: string;
    /**
     * Statistics about annotation specs.
     */
    labelStats?: GoogleCloudDatalabelingV1beta1LabelStats;
    /**
     * Metadata on AnnotatedDataset.
     */
    metadata?: GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata;
    /**
     * Output only. AnnotatedDataset resource name in format of: projects/{project_id}/datasets/{dataset_id}/annotatedDatasets/ {annotated_dataset_id}
     */
    name?: string;
}
