package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppendCellsRequest
 * Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
**/
public class AppendCellsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public AppendCellsRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rows")
    public RowData[] rows;
    public AppendCellsRequest withRows(RowData[] rows) {
        this.rows = rows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public AppendCellsRequest withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}