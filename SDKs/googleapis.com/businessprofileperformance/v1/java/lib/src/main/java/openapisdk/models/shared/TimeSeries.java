package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeSeries
 * Represents a timeseries.
**/
public class TimeSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datedValues")
    public DatedValue[] datedValues;
    public TimeSeries withDatedValues(DatedValue[] datedValues) {
        this.datedValues = datedValues;
        return this;
    }
}