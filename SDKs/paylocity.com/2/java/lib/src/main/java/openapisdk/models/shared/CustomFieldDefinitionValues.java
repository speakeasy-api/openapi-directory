package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomFieldDefinitionValues {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public CustomFieldDefinitionValues withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomFieldDefinitionValues withDescription(String description) {
        this.description = description;
        return this;
    }
}