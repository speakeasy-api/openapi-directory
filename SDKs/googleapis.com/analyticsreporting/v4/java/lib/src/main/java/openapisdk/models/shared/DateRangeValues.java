package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DateRangeValues
 * Used to return a list of metrics for a single DateRange / dimension combination
**/
public class DateRangeValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pivotValueRegions")
    public PivotValueRegion[] pivotValueRegions;
    public DateRangeValues withPivotValueRegions(PivotValueRegion[] pivotValueRegions) {
        this.pivotValueRegions = pivotValueRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public DateRangeValues withValues(String[] values) {
        this.values = values;
        return this;
    }
}