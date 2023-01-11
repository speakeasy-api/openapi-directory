package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateADatabaseRequestBodyPropertiesWinePairing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rich_text")
    public java.util.Map<String, Object> richText;
    public UpdateADatabaseRequestBodyPropertiesWinePairing withRichText(java.util.Map<String, Object> richText) {
        this.richText = richText;
        return this;
    }
}