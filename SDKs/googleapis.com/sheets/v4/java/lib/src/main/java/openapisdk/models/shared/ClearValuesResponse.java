package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClearValuesResponse
 * The response when clearing a range of values in a spreadsheet.
**/
public class ClearValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clearedRange")
    public String clearedRange;
    public ClearValuesResponse withClearedRange(String clearedRange) {
        this.clearedRange = clearedRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public ClearValuesResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
}