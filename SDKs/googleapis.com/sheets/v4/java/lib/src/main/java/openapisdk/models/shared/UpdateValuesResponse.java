package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateValuesResponse
 * The response when updating a range of values in a spreadsheet.
**/
public class UpdateValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public UpdateValuesResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedCells")
    public Integer updatedCells;
    public UpdateValuesResponse withUpdatedCells(Integer updatedCells) {
        this.updatedCells = updatedCells;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedColumns")
    public Integer updatedColumns;
    public UpdateValuesResponse withUpdatedColumns(Integer updatedColumns) {
        this.updatedColumns = updatedColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedData")
    public ValueRange updatedData;
    public UpdateValuesResponse withUpdatedData(ValueRange updatedData) {
        this.updatedData = updatedData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedRange")
    public String updatedRange;
    public UpdateValuesResponse withUpdatedRange(String updatedRange) {
        this.updatedRange = updatedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedRows")
    public Integer updatedRows;
    public UpdateValuesResponse withUpdatedRows(Integer updatedRows) {
        this.updatedRows = updatedRows;
        return this;
    }
}