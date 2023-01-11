package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StatisticalInfoM {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_range")
    public Long errorRange;
    public StatisticalInfoM withErrorRange(Long errorRange) {
        this.errorRange = errorRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lower_bound")
    public Long lowerBound;
    public StatisticalInfoM withLowerBound(Long lowerBound) {
        this.lowerBound = lowerBound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upper_bound")
    public Long upperBound;
    public StatisticalInfoM withUpperBound(Long upperBound) {
        this.upperBound = upperBound;
        return this;
    }
}