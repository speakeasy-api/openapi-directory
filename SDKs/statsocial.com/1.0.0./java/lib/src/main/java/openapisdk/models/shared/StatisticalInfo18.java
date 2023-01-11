package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StatisticalInfo18 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_range")
    public Long errorRange;
    public StatisticalInfo18 withErrorRange(Long errorRange) {
        this.errorRange = errorRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lower_bound")
    public Long lowerBound;
    public StatisticalInfo18 withLowerBound(Long lowerBound) {
        this.lowerBound = lowerBound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upper_bound")
    public Long upperBound;
    public StatisticalInfo18 withUpperBound(Long upperBound) {
        this.upperBound = upperBound;
        return this;
    }
}