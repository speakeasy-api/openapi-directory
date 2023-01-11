package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSpreadsheetPropertiesRequest
 * Updates properties of a spreadsheet.
**/
public class UpdateSpreadsheetPropertiesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateSpreadsheetPropertiesRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public SpreadsheetProperties properties;
    public UpdateSpreadsheetPropertiesRequest withProperties(SpreadsheetProperties properties) {
        this.properties = properties;
        return this;
    }
}