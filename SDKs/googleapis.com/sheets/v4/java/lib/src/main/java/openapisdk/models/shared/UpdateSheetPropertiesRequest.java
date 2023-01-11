package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSheetPropertiesRequest
 * Updates properties of the sheet with the specified sheetId.
**/
public class UpdateSheetPropertiesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateSheetPropertiesRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public SheetProperties properties;
    public UpdateSheetPropertiesRequest withProperties(SheetProperties properties) {
        this.properties = properties;
        return this;
    }
}