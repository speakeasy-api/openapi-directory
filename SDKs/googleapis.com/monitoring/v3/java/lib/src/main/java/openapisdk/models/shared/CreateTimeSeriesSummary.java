package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateTimeSeriesSummary
 * Summary of the result of a failed request to write data to a time series.
**/
public class CreateTimeSeriesSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public Error[] errors;
    public CreateTimeSeriesSummary withErrors(Error[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successPointCount")
    public Integer successPointCount;
    public CreateTimeSeriesSummary withSuccessPointCount(Integer successPointCount) {
        this.successPointCount = successPointCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPointCount")
    public Integer totalPointCount;
    public CreateTimeSeriesSummary withTotalPointCount(Integer totalPointCount) {
        this.totalPointCount = totalPointCount;
        return this;
    }
}