package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LabelResult
 * label
**/
public class LabelResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("label")
    public String label;
    public LabelResult withLabel(String label) {
        this.label = label;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probability")
    public Float probability;
    public LabelResult withProbability(Float probability) {
        this.probability = probability;
        return this;
    }
}