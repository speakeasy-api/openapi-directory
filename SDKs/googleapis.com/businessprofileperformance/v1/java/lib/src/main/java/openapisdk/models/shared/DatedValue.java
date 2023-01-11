package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatedValue
 * Represents a single datapoint in the timeseries, where each datapoint is a date-value pair.
**/
public class DatedValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("date")
    public Date date;
    public DatedValue withDate(Date date) {
        this.date = date;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public DatedValue withValue(String value) {
        this.value = value;
        return this;
    }
}