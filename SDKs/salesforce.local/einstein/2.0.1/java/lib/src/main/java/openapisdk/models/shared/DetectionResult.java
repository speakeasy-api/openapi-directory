package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetectionResult
 * label
**/
public class DetectionResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBox")
    public BoundingBox boundingBox;
    public DetectionResult withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public DetectionResult withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probability")
    public Float probability;
    public DetectionResult withProbability(Float probability) {
        this.probability = probability;
        return this;
    }
}