package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateValuesResponse
 * The response when updating a range of values in a spreadsheet.
**/
public class BatchUpdateValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public UpdateValuesResponse[] responses;
    public BatchUpdateValuesResponse withResponses(UpdateValuesResponse[] responses) {
        this.responses = responses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public BatchUpdateValuesResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUpdatedCells")
    public Integer totalUpdatedCells;
    public BatchUpdateValuesResponse withTotalUpdatedCells(Integer totalUpdatedCells) {
        this.totalUpdatedCells = totalUpdatedCells;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUpdatedColumns")
    public Integer totalUpdatedColumns;
    public BatchUpdateValuesResponse withTotalUpdatedColumns(Integer totalUpdatedColumns) {
        this.totalUpdatedColumns = totalUpdatedColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUpdatedRows")
    public Integer totalUpdatedRows;
    public BatchUpdateValuesResponse withTotalUpdatedRows(Integer totalUpdatedRows) {
        this.totalUpdatedRows = totalUpdatedRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUpdatedSheets")
    public Integer totalUpdatedSheets;
    public BatchUpdateValuesResponse withTotalUpdatedSheets(Integer totalUpdatedSheets) {
        this.totalUpdatedSheets = totalUpdatedSheets;
        return this;
    }
}