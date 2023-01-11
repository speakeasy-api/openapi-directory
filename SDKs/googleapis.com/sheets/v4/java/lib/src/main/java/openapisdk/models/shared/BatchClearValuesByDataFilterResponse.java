package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchClearValuesByDataFilterResponse
 * The response when clearing a range of values selected with DataFilters in a spreadsheet.
**/
public class BatchClearValuesByDataFilterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clearedRanges")
    public String[] clearedRanges;
    public BatchClearValuesByDataFilterResponse withClearedRanges(String[] clearedRanges) {
        this.clearedRanges = clearedRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public BatchClearValuesByDataFilterResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}