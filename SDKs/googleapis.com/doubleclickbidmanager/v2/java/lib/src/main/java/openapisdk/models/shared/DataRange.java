package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataRange
 * Report data range.
**/
public class DataRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customEndDate")
    public Date customEndDate;
    public DataRange withCustomEndDate(Date customEndDate) {
        this.customEndDate = customEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customStartDate")
    public Date customStartDate;
    public DataRange withCustomStartDate(Date customStartDate) {
        this.customStartDate = customStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public DataRangeRangeEnum range;
    public DataRange withRange(DataRangeRangeEnum range) {
        this.range = range;
        return this;
    }
}