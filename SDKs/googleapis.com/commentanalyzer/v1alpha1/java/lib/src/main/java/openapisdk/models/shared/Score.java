package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Score
 * Analysis scores are described by a value and a ScoreType.
**/
public class Score {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ScoreTypeEnum type;
    public Score withType(ScoreTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Float value;
    public Score withValue(Float value) {
        this.value = value;
        return this;
    }
}