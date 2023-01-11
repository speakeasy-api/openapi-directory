package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Prediction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("boundingBox")
    public BoundingBox boundingBox;
    public Prediction withBoundingBox(BoundingBox boundingBox) {
        this.boundingBox = boundingBox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("probability")
    public Float probability;
    public Prediction withProbability(Float probability) {
        this.probability = probability;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagId")
    public String tagId;
    public Prediction withTagId(String tagId) {
        this.tagId = tagId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagName")
    public String tagName;
    public Prediction withTagName(String tagName) {
        this.tagName = tagName;
        return this;
    }
}