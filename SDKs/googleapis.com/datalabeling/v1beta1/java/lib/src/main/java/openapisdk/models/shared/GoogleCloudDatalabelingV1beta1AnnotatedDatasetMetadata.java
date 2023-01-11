package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata
 * Metadata on AnnotatedDataset.
**/
public class GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPolyConfig")
    public GoogleCloudDatalabelingV1beta1BoundingPolyConfig boundingPolyConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withBoundingPolyConfig(GoogleCloudDatalabelingV1beta1BoundingPolyConfig boundingPolyConfig) {
        this.boundingPolyConfig = boundingPolyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventConfig")
    public GoogleCloudDatalabelingV1beta1EventConfig eventConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withEventConfig(GoogleCloudDatalabelingV1beta1EventConfig eventConfig) {
        this.eventConfig = eventConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("humanAnnotationConfig")
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig humanAnnotationConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withHumanAnnotationConfig(GoogleCloudDatalabelingV1beta1HumanAnnotationConfig humanAnnotationConfig) {
        this.humanAnnotationConfig = humanAnnotationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageClassificationConfig")
    public GoogleCloudDatalabelingV1beta1ImageClassificationConfig imageClassificationConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withImageClassificationConfig(GoogleCloudDatalabelingV1beta1ImageClassificationConfig imageClassificationConfig) {
        this.imageClassificationConfig = imageClassificationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectDetectionConfig")
    public GoogleCloudDatalabelingV1beta1ObjectDetectionConfig objectDetectionConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withObjectDetectionConfig(GoogleCloudDatalabelingV1beta1ObjectDetectionConfig objectDetectionConfig) {
        this.objectDetectionConfig = objectDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTrackingConfig")
    public GoogleCloudDatalabelingV1beta1ObjectTrackingConfig objectTrackingConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withObjectTrackingConfig(GoogleCloudDatalabelingV1beta1ObjectTrackingConfig objectTrackingConfig) {
        this.objectTrackingConfig = objectTrackingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polylineConfig")
    public GoogleCloudDatalabelingV1beta1PolylineConfig polylineConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withPolylineConfig(GoogleCloudDatalabelingV1beta1PolylineConfig polylineConfig) {
        this.polylineConfig = polylineConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentationConfig")
    public GoogleCloudDatalabelingV1beta1SegmentationConfig segmentationConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withSegmentationConfig(GoogleCloudDatalabelingV1beta1SegmentationConfig segmentationConfig) {
        this.segmentationConfig = segmentationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textClassificationConfig")
    public GoogleCloudDatalabelingV1beta1TextClassificationConfig textClassificationConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withTextClassificationConfig(GoogleCloudDatalabelingV1beta1TextClassificationConfig textClassificationConfig) {
        this.textClassificationConfig = textClassificationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textEntityExtractionConfig")
    public GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig textEntityExtractionConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withTextEntityExtractionConfig(GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig textEntityExtractionConfig) {
        this.textEntityExtractionConfig = textEntityExtractionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoClassificationConfig")
    public GoogleCloudDatalabelingV1beta1VideoClassificationConfig videoClassificationConfig;
    public GoogleCloudDatalabelingV1beta1AnnotatedDatasetMetadata withVideoClassificationConfig(GoogleCloudDatalabelingV1beta1VideoClassificationConfig videoClassificationConfig) {
        this.videoClassificationConfig = videoClassificationConfig;
        return this;
    }
}