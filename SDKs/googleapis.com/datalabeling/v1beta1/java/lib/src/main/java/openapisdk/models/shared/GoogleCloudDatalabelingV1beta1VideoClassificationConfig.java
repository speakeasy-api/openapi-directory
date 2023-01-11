package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1VideoClassificationConfig
 * Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
**/
public class GoogleCloudDatalabelingV1beta1VideoClassificationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSetConfigs")
    public GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig[] annotationSpecSetConfigs;
    public GoogleCloudDatalabelingV1beta1VideoClassificationConfig withAnnotationSpecSetConfigs(GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig[] annotationSpecSetConfigs) {
        this.annotationSpecSetConfigs = annotationSpecSetConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applyShotDetection")
    public Boolean applyShotDetection;
    public GoogleCloudDatalabelingV1beta1VideoClassificationConfig withApplyShotDetection(Boolean applyShotDetection) {
        this.applyShotDetection = applyShotDetection;
        return this;
    }
}