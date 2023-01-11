package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataFilterValueRange
 * A range of values whose location is specified by a DataFilter.
**/
public class DataFilterValueRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilter")
    public DataFilter dataFilter;
    public DataFilterValueRange withDataFilter(DataFilter dataFilter) {
        this.dataFilter = dataFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("majorDimension")
    public DataFilterValueRangeMajorDimensionEnum majorDimension;
    public DataFilterValueRange withMajorDimension(DataFilterValueRangeMajorDimensionEnum majorDimension) {
        this.majorDimension = majorDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public Object[][] values;
    public DataFilterValueRange withValues(Object[][] values) {
        this.values = values;
        return this;
    }
}