package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImageTagPrediction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Probability")
    public Float probability;
    public ImageTagPrediction withProbability(Float probability) {
        this.probability = probability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tag")
    public String tag;
    public ImageTagPrediction withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TagId")
    public String tagId;
    public ImageTagPrediction withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
}