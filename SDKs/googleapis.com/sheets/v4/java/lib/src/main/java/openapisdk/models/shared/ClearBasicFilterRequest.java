package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClearBasicFilterRequest
 * Clears the basic filter, if any exists on the sheet.
**/
public class ClearBasicFilterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public ClearBasicFilterRequest withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}