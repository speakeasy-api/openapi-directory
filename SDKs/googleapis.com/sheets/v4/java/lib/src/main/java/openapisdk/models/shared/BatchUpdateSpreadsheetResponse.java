package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateSpreadsheetResponse
 * The reply for batch updating a spreadsheet.
**/
public class BatchUpdateSpreadsheetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replies")
    public Response[] replies;
    public BatchUpdateSpreadsheetResponse withReplies(Response[] replies) {
        this.replies = replies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheetId")
    public String spreadsheetId;
    public BatchUpdateSpreadsheetResponse withSpreadsheetId(String spreadsheetId) {
        this.spreadsheetId = spreadsheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedSpreadsheet")
    public Spreadsheet updatedSpreadsheet;
    public BatchUpdateSpreadsheetResponse withUpdatedSpreadsheet(Spreadsheet updatedSpreadsheet) {
        this.updatedSpreadsheet = updatedSpreadsheet;
        return this;
    }
}