package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1EventConfig
 * Config for video event human labeling task.
**/
public class GoogleCloudDatalabelingV1beta1EventConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSets")
    public String[] annotationSpecSets;
    public GoogleCloudDatalabelingV1beta1EventConfig withAnnotationSpecSets(String[] annotationSpecSets) {
        this.annotationSpecSets = annotationSpecSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clipLength")
    public Integer clipLength;
    public GoogleCloudDatalabelingV1beta1EventConfig withClipLength(Integer clipLength) {
        this.clipLength = clipLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overlapLength")
    public Integer overlapLength;
    public GoogleCloudDatalabelingV1beta1EventConfig withOverlapLength(Integer overlapLength) {
        this.overlapLength = overlapLength;
        return this;
    }
}