package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GridRange
 * A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
**/
public class GridRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endColumnIndex")
    public Integer endColumnIndex;
    public GridRange withEndColumnIndex(Integer endColumnIndex) {
        this.endColumnIndex = endColumnIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endRowIndex")
    public Integer endRowIndex;
    public GridRange withEndRowIndex(Integer endRowIndex) {
        this.endRowIndex = endRowIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public GridRange withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startColumnIndex")
    public Integer startColumnIndex;
    public GridRange withStartColumnIndex(Integer startColumnIndex) {
        this.startColumnIndex = startColumnIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startRowIndex")
    public Integer startRowIndex;
    public GridRange withStartRowIndex(Integer startRowIndex) {
        this.startRowIndex = startRowIndex;
        return this;
    }
}