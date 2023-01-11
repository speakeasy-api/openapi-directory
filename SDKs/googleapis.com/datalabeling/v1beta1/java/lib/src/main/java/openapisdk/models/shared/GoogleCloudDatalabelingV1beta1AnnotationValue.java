package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1AnnotationValue
 * Annotation value for an example.
**/
public class GoogleCloudDatalabelingV1beta1AnnotationValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageBoundingPolyAnnotation")
    public GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation imageBoundingPolyAnnotation;
    public GoogleCloudDatalabelingV1beta1AnnotationValue withImageBoundingPolyAnnotation(GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation imageBoundingPolyAnnotation) {
        this.imageBoundingPolyAnnotation = imageBoundingPolyAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageClassificationAnnotation")
    public GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation imageClassificationAnnotation;
    public GoogleCloudDatalabelingV1beta1AnnotationValue withImageClassificationAnnotation(GoogleCloudDatalabelingV1beta1ImageClassificationAnnotation imageClassificationAnnotation) {
        this.imageClassificationAnnotation = imageClassificationAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imagePolylineAnnotation")
    public GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation imagePolylineAnnotation;
    public GoogleCloudDatalabelingV1beta1AnnotationValue withImagePolylineAnnotation(GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation imagePolylineAnnotation) {
        this.imagePolylineAnnotation = imagePolylineAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageSegmentationAnnotation")
    public GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation imageSegmentationAnnotation;
    public GoogleCloudDatalabelingV1beta1AnnotationValue withImageSegmentationAnnotation(GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation imageSegmentationAnnotation) {
        this.imageSegmentationAnnotation = imageSegmentationAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textClassificationAnnotation")
    public GoogleCloudDatalabelingV1beta1TextClassificationAnnotation textClassificationAnnotation;
    public GoogleCloudDatalabelingV1beta1AnnotationValue withTextClassificationAnnotation(GoogleCloudDatalabelingV1beta1TextClassificationAnnotation textClassificationAnnotation) {
        this.textClassificationAnnotation = textClassificationAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textEntityExtractionAnnotation")
    public GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation textEntityExtractionAnnotation;
    public GoogleCloudDatalabelingV1beta1AnnotationValue withTextEntityExtractionAnnotation(GoogleCloudDatalabelingV1beta1TextEntityExtractionAnnotation textEntityExtractionAnnotation) {
        this.textEntityExtractionAnnotation = textEntityExtractionAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoClassificationAnnotation")
    public GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation videoClassificationAnnotation;
    public GoogleCloudDatalabelingV1beta1AnnotationValue withVideoClassificationAnnotation(GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation videoClassificationAnnotation) {
        this.videoClassificationAnnotation = videoClassificationAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoEventAnnotation")
    public GoogleCloudDatalabelingV1beta1VideoEventAnnotation videoEventAnnotation;
    public GoogleCloudDatalabelingV1beta1AnnotationValue withVideoEventAnnotation(GoogleCloudDatalabelingV1beta1VideoEventAnnotation videoEventAnnotation) {
        this.videoEventAnnotation = videoEventAnnotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoObjectTrackingAnnotation")
    public GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation videoObjectTrackingAnnotation;
    public GoogleCloudDatalabelingV1beta1AnnotationValue withVideoObjectTrackingAnnotation(GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation videoObjectTrackingAnnotation) {
        this.videoObjectTrackingAnnotation = videoObjectTrackingAnnotation;
        return this;
    }
}