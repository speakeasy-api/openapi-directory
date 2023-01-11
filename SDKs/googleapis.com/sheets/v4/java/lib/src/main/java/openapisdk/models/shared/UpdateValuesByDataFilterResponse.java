package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateValuesByDataFilterResponse
 * The response when updating a range of values by a data filter in a spreadsheet.
**/
public class UpdateValuesByDataFilterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataFilter")
    public DataFilter dataFilter;
    public UpdateValuesByDataFilterResponse withDataFilter(DataFilter dataFilter) {
        this.dataFilter = dataFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedCells")
    public Integer updatedCells;
    public UpdateValuesByDataFilterResponse withUpdatedCells(Integer updatedCells) {
        this.updatedCells = updatedCells;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedColumns")
    public Integer updatedColumns;
    public UpdateValuesByDataFilterResponse withUpdatedColumns(Integer updatedColumns) {
        this.updatedColumns = updatedColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedData")
    public ValueRange updatedData;
    public UpdateValuesByDataFilterResponse withUpdatedData(ValueRange updatedData) {
        this.updatedData = updatedData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedRange")
    public String updatedRange;
    public UpdateValuesByDataFilterResponse withUpdatedRange(String updatedRange) {
        this.updatedRange = updatedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedRows")
    public Integer updatedRows;
    public UpdateValuesByDataFilterResponse withUpdatedRows(Integer updatedRows) {
        this.updatedRows = updatedRows;
        return this;
    }
}