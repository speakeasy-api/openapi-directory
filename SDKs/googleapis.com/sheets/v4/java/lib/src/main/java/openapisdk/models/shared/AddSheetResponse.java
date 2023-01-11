package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddSheetResponse
 * The result of adding a sheet.
**/
public class AddSheetResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public SheetProperties properties;
    public AddSheetResponse withProperties(SheetProperties properties) {
        this.properties = properties;
        return this;
    }
}