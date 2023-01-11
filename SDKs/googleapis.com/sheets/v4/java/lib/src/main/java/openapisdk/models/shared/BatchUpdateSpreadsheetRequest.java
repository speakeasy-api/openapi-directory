package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateSpreadsheetRequest
 * The request for updating any aspect of a spreadsheet.
**/
public class BatchUpdateSpreadsheetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeSpreadsheetInResponse")
    public Boolean includeSpreadsheetInResponse;
    public BatchUpdateSpreadsheetRequest withIncludeSpreadsheetInResponse(Boolean includeSpreadsheetInResponse) {
        this.includeSpreadsheetInResponse = includeSpreadsheetInResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public Request[] requests;
    public BatchUpdateSpreadsheetRequest withRequests(Request[] requests) {
        this.requests = requests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseIncludeGridData")
    public Boolean responseIncludeGridData;
    public BatchUpdateSpreadsheetRequest withResponseIncludeGridData(Boolean responseIncludeGridData) {
        this.responseIncludeGridData = responseIncludeGridData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseRanges")
    public String[] responseRanges;
    public BatchUpdateSpreadsheetRequest withResponseRanges(String[] responseRanges) {
        this.responseRanges = responseRanges;
        return this;
    }
}