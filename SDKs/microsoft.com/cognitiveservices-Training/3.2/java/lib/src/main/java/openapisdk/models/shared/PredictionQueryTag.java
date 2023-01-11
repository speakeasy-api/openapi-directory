package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PredictionQueryTag {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PredictionQueryTag withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxThreshold")
    public Float maxThreshold;
    public PredictionQueryTag withMaxThreshold(Float maxThreshold) {
        this.maxThreshold = maxThreshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minThreshold")
    public Float minThreshold;
    public PredictionQueryTag withMinThreshold(Float minThreshold) {
        this.minThreshold = minThreshold;
        return this;
    }
}