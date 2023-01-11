package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1SegmentationConfig
 * Config for image segmentation
**/
public class GoogleCloudDatalabelingV1beta1SegmentationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public String annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1SegmentationConfig withAnnotationSpecSet(String annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructionMessage")
    public String instructionMessage;
    public GoogleCloudDatalabelingV1beta1SegmentationConfig withInstructionMessage(String instructionMessage) {
        this.instructionMessage = instructionMessage;
        return this;
    }
}