package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObjectDetectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public ObjectDetectionResponse withObject(String object) {
        this.object = object;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probabilities")
    public DetectionResult[] probabilities;
    public ObjectDetectionResponse withProbabilities(DetectionResult[] probabilities) {
        this.probabilities = probabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleId")
    public String sampleId;
    public ObjectDetectionResponse withSampleId(String sampleId) {
        this.sampleId = sampleId;
        return this;
    }
}