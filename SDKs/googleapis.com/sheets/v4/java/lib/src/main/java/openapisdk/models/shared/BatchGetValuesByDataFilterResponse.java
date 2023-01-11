package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchGetValuesByDataFilterResponse
 * The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
**/
public class BatchGetValuesByDataFilterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public BatchGetValuesByDataFilterResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueRanges")
    public MatchedValueRange[] valueRanges;
    public BatchGetValuesByDataFilterResponse withValueRanges(MatchedValueRange[] valueRanges) {
        this.valueRanges = valueRanges;
        return this;
    }
}