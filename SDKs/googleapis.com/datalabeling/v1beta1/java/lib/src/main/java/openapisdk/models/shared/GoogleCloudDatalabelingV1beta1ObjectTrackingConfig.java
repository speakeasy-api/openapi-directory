package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1ObjectTrackingConfig
 * Config for video object tracking human labeling task.
**/
public class GoogleCloudDatalabelingV1beta1ObjectTrackingConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public String annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1ObjectTrackingConfig withAnnotationSpecSet(String annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clipLength")
    public Integer clipLength;
    public GoogleCloudDatalabelingV1beta1ObjectTrackingConfig withClipLength(Integer clipLength) {
        this.clipLength = clipLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overlapLength")
    public Integer overlapLength;
    public GoogleCloudDatalabelingV1beta1ObjectTrackingConfig withOverlapLength(Integer overlapLength) {
        this.overlapLength = overlapLength;
        return this;
    }
}