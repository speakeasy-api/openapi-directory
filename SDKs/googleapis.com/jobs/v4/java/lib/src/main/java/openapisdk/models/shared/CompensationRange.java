package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CompensationRange
 * Compensation range.
**/
public class CompensationRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxCompensation")
    public Money maxCompensation;
    public CompensationRange withMaxCompensation(Money maxCompensation) {
        this.maxCompensation = maxCompensation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minCompensation")
    public Money minCompensation;
    public CompensationRange withMinCompensation(Money minCompensation) {
        this.minCompensation = minCompensation;
        return this;
    }
}