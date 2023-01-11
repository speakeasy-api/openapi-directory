package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppendValuesResponse
 * The response when updating a range of values in a spreadsheet.
**/
public class AppendValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public AppendValuesResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableRange")
    public String tableRange;
    public AppendValuesResponse withTableRange(String tableRange) {
        this.tableRange = tableRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updates")
    public UpdateValuesResponse updates;
    public AppendValuesResponse withUpdates(UpdateValuesResponse updates) {
        this.updates = updates;
        return this;
    }
}