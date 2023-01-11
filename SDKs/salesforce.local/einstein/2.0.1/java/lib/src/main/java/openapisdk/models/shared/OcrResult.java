package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OcrResult
 * Array of probabilities for the prediction.
**/
public class OcrResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attributes attributes;
    public OcrResult withAttributes(Attributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBox")
    public BoundingBox boundingBox;
    public OcrResult withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public OcrResult withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probability")
    public Float probability;
    public OcrResult withProbability(Float probability) {
        this.probability = probability;
        return this;
    }
}