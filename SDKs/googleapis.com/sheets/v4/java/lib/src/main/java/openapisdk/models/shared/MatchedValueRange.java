package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MatchedValueRange
 * A value range that was matched by one or more data filers.
**/
public class MatchedValueRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilters")
    public DataFilter[] dataFilters;
    public MatchedValueRange withDataFilters(DataFilter[] dataFilters) {
        this.dataFilters = dataFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueRange")
    public ValueRange valueRange;
    public MatchedValueRange withValueRange(ValueRange valueRange) {
        this.valueRange = valueRange;
        return this;
    }
}