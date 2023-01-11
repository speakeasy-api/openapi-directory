package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AttributeParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreThreshold")
    public Float scoreThreshold;
    public AttributeParameters withScoreThreshold(Float scoreThreshold) {
        this.scoreThreshold = scoreThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scoreType")
    public AttributeParametersScoreTypeEnum scoreType;
    public AttributeParameters withScoreType(AttributeParametersScoreTypeEnum scoreType) {
        this.scoreType = scoreType;
        return this;
    }
}