package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CopySheetToAnotherSpreadsheetRequest
 * The request to copy a sheet across spreadsheets.
**/
public class CopySheetToAnotherSpreadsheetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationSpreadsheetId")
    public String destinationSpreadsheetId;
    public CopySheetToAnotherSpreadsheetRequest withDestinationSpreadsheetId(String destinationSpreadsheetId) {
        this.destinationSpreadsheetId = destinationSpreadsheetId;
        return this;
    }
}