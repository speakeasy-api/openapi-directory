package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDatalabelingV1beta1PolylineConfig
 * Config for image polyline human labeling task.
**/
public class GoogleCloudDatalabelingV1beta1PolylineConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationSpecSet")
    public String annotationSpecSet;
    public GoogleCloudDatalabelingV1beta1PolylineConfig withAnnotationSpecSet(String annotationSpecSet) {
        this.annotationSpecSet = annotationSpecSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instructionMessage")
    public String instructionMessage;
    public GoogleCloudDatalabelingV1beta1PolylineConfig withInstructionMessage(String instructionMessage) {
        this.instructionMessage = instructionMessage;
        return this;
    }
}