package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LearningCurveList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public LearningCurve[] data;
    public LearningCurveList withData(LearningCurve[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("object")
    public String object;
    public LearningCurveList withObject(String object) {
        this.object = object;
        return this;
    }
}