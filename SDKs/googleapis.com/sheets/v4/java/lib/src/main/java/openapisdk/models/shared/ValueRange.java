package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValueRange
 * Data within a range of the spreadsheet.
**/
public class ValueRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("majorDimension")
    public ValueRangeMajorDimensionEnum majorDimension;
    public ValueRange withMajorDimension(ValueRangeMajorDimensionEnum majorDimension) {
        this.majorDimension = majorDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public String range;
    public ValueRange withRange(String range) {
        this.range = range;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public Object[][] values;
    public ValueRange withValues(Object[][] values) {
        this.values = values;
        return this;
    }
}