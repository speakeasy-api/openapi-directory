package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchClearValuesResponse
 * The response when clearing a range of values in a spreadsheet.
**/
public class BatchClearValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clearedRanges")
    public String[] clearedRanges;
    public BatchClearValuesResponse withClearedRanges(String[] clearedRanges) {
        this.clearedRanges = clearedRanges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public BatchClearValuesResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}