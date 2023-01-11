package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetValuesByDataFilterRequest
 * The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters.
**/
public class BatchGetValuesByDataFilterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilters")
    public DataFilter[] dataFilters;
    public BatchGetValuesByDataFilterRequest withDataFilters(DataFilter[] dataFilters) {
        this.dataFilters = dataFilters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dateTimeRenderOption")
    public BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum dateTimeRenderOption;
    public BatchGetValuesByDataFilterRequest withDateTimeRenderOption(BatchGetValuesByDataFilterRequestDateTimeRenderOptionEnum dateTimeRenderOption) {
        this.dateTimeRenderOption = dateTimeRenderOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("majorDimension")
    public BatchGetValuesByDataFilterRequestMajorDimensionEnum majorDimension;
    public BatchGetValuesByDataFilterRequest withMajorDimension(BatchGetValuesByDataFilterRequestMajorDimensionEnum majorDimension) {
        this.majorDimension = majorDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueRenderOption")
    public BatchGetValuesByDataFilterRequestValueRenderOptionEnum valueRenderOption;
    public BatchGetValuesByDataFilterRequest withValueRenderOption(BatchGetValuesByDataFilterRequestValueRenderOptionEnum valueRenderOption) {
        this.valueRenderOption = valueRenderOption;
        return this;
    }
}