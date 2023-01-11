package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DuplicateSheetResponse
 * The result of duplicating a sheet.
**/
public class DuplicateSheetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public SheetProperties properties;
    public DuplicateSheetResponse withProperties(SheetProperties properties) {
        this.properties = properties;
        return this;
    }
}