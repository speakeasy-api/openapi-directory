package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RatioPart
 * Describes a query to build the numerator or denominator of a TimeSeriesFilterRatio.
**/
public class RatioPart {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregation")
    public Aggregation aggregation;
    public RatioPart withAggregation(Aggregation aggregation) {
        this.aggregation = aggregation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public String filter;
    public RatioPart withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}