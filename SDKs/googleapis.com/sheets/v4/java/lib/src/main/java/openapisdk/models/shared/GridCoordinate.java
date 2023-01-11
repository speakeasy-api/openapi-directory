package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GridCoordinate
 * A coordinate in a sheet. All indexes are zero-based.
**/
public class GridCoordinate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("columnIndex")
    public Integer columnIndex;
    public GridCoordinate withColumnIndex(Integer columnIndex) {
        this.columnIndex = columnIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowIndex")
    public Integer rowIndex;
    public GridCoordinate withRowIndex(Integer rowIndex) {
        this.rowIndex = rowIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public GridCoordinate withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}