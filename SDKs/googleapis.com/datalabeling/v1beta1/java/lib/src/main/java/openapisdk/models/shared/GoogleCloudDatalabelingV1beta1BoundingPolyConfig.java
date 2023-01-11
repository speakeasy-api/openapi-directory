package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1BoundingPolyConfig
 * Config for image bounding poly (and bounding box) human labeling task.
**/
public class GoogleCloudDatalabelingV1beta1BoundingPolyConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public String annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1BoundingPolyConfig withAnnotationSpecSet(String annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructionMessage")
    public String instructionMessage;
    public GoogleCloudDatalabelingV1beta1BoundingPolyConfig withInstructionMessage(String instructionMessage) {
        this.instructionMessage = instructionMessage;
        return this;
    }
}