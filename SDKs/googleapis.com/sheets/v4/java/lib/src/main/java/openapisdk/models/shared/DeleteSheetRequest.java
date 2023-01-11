package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeleteSheetRequest
 * Deletes the requested sheet.
**/
public class DeleteSheetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public DeleteSheetRequest withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}