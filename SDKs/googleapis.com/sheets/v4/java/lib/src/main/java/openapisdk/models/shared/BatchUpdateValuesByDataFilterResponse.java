package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateValuesByDataFilterResponse
 * The response when updating a range of values in a spreadsheet.
**/
public class BatchUpdateValuesByDataFilterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responses")
    public UpdateValuesByDataFilterResponse[] responses;
    public BatchUpdateValuesByDataFilterResponse withResponses(UpdateValuesByDataFilterResponse[] responses) {
        this.responses = responses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public BatchUpdateValuesByDataFilterResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUpdatedCells")
    public Integer totalUpdatedCells;
    public BatchUpdateValuesByDataFilterResponse withTotalUpdatedCells(Integer totalUpdatedCells) {
        this.totalUpdatedCells = totalUpdatedCells;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUpdatedColumns")
    public Integer totalUpdatedColumns;
    public BatchUpdateValuesByDataFilterResponse withTotalUpdatedColumns(Integer totalUpdatedColumns) {
        this.totalUpdatedColumns = totalUpdatedColumns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUpdatedRows")
    public Integer totalUpdatedRows;
    public BatchUpdateValuesByDataFilterResponse withTotalUpdatedRows(Integer totalUpdatedRows) {
        this.totalUpdatedRows = totalUpdatedRows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalUpdatedSheets")
    public Integer totalUpdatedSheets;
    public BatchUpdateValuesByDataFilterResponse withTotalUpdatedSheets(Integer totalUpdatedSheets) {
        this.totalUpdatedSheets = totalUpdatedSheets;
        return this;
    }
}