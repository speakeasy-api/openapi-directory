package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1LabelImageRequest
 * Request message for starting an image labeling task.
**/
public class GoogleCloudDatalabelingV1beta1LabelImageRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicConfig")
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig basicConfig;
    public GoogleCloudDatalabelingV1beta1LabelImageRequest withBasicConfig(GoogleCloudDatalabelingV1beta1HumanAnnotationConfig basicConfig) {
        this.basicConfig = basicConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingPolyConfig")
    public GoogleCloudDatalabelingV1beta1BoundingPolyConfig boundingPolyConfig;
    public GoogleCloudDatalabelingV1beta1LabelImageRequest withBoundingPolyConfig(GoogleCloudDatalabelingV1beta1BoundingPolyConfig boundingPolyConfig) {
        this.boundingPolyConfig = boundingPolyConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feature")
    public GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum feature;
    public GoogleCloudDatalabelingV1beta1LabelImageRequest withFeature(GoogleCloudDatalabelingV1beta1LabelImageRequestFeatureEnum feature) {
        this.feature = feature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageClassificationConfig")
    public GoogleCloudDatalabelingV1beta1ImageClassificationConfig imageClassificationConfig;
    public GoogleCloudDatalabelingV1beta1LabelImageRequest withImageClassificationConfig(GoogleCloudDatalabelingV1beta1ImageClassificationConfig imageClassificationConfig) {
        this.imageClassificationConfig = imageClassificationConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polylineConfig")
    public GoogleCloudDatalabelingV1beta1PolylineConfig polylineConfig;
    public GoogleCloudDatalabelingV1beta1LabelImageRequest withPolylineConfig(GoogleCloudDatalabelingV1beta1PolylineConfig polylineConfig) {
        this.polylineConfig = polylineConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("segmentationConfig")
    public GoogleCloudDatalabelingV1beta1SegmentationConfig segmentationConfig;
    public GoogleCloudDatalabelingV1beta1LabelImageRequest withSegmentationConfig(GoogleCloudDatalabelingV1beta1SegmentationConfig segmentationConfig) {
        this.segmentationConfig = segmentationConfig;
        return this;
    }
}