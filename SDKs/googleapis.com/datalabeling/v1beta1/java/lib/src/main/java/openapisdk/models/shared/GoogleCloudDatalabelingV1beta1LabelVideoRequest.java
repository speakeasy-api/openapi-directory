package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1LabelVideoRequest
 * Request message for LabelVideo.
**/
public class GoogleCloudDatalabelingV1beta1LabelVideoRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basicConfig")
    public GoogleCloudDatalabelingV1beta1HumanAnnotationConfig basicConfig;
    public GoogleCloudDatalabelingV1beta1LabelVideoRequest withBasicConfig(GoogleCloudDatalabelingV1beta1HumanAnnotationConfig basicConfig) {
        this.basicConfig = basicConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventConfig")
    public GoogleCloudDatalabelingV1beta1EventConfig eventConfig;
    public GoogleCloudDatalabelingV1beta1LabelVideoRequest withEventConfig(GoogleCloudDatalabelingV1beta1EventConfig eventConfig) {
        this.eventConfig = eventConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feature")
    public GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum feature;
    public GoogleCloudDatalabelingV1beta1LabelVideoRequest withFeature(GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum feature) {
        this.feature = feature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectDetectionConfig")
    public GoogleCloudDatalabelingV1beta1ObjectDetectionConfig objectDetectionConfig;
    public GoogleCloudDatalabelingV1beta1LabelVideoRequest withObjectDetectionConfig(GoogleCloudDatalabelingV1beta1ObjectDetectionConfig objectDetectionConfig) {
        this.objectDetectionConfig = objectDetectionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectTrackingConfig")
    public GoogleCloudDatalabelingV1beta1ObjectTrackingConfig objectTrackingConfig;
    public GoogleCloudDatalabelingV1beta1LabelVideoRequest withObjectTrackingConfig(GoogleCloudDatalabelingV1beta1ObjectTrackingConfig objectTrackingConfig) {
        this.objectTrackingConfig = objectTrackingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videoClassificationConfig")
    public GoogleCloudDatalabelingV1beta1VideoClassificationConfig videoClassificationConfig;
    public GoogleCloudDatalabelingV1beta1LabelVideoRequest withVideoClassificationConfig(GoogleCloudDatalabelingV1beta1VideoClassificationConfig videoClassificationConfig) {
        this.videoClassificationConfig = videoClassificationConfig;
        return this;
    }
}