package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetValuesResponse
 * The response when retrieving more than one range of values in a spreadsheet.
**/
public class BatchGetValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public BatchGetValuesResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueRanges")
    public ValueRange[] valueRanges;
    public BatchGetValuesResponse withValueRanges(ValueRange[] valueRanges) {
        this.valueRanges = valueRanges;
        return this;
    }
}