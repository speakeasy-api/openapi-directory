package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTemplate200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public openapisdk.models.shared.TemplateDefinition response;
    public CreateTemplate200ApplicationJson withResponse(openapisdk.models.shared.TemplateDefinition response) {
        this.response = response;
        return this;
    }
}