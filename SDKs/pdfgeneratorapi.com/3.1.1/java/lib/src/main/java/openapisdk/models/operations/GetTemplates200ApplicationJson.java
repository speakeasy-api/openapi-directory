package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTemplates200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public openapisdk.models.shared.Template[] response;
    public GetTemplates200ApplicationJson withResponse(openapisdk.models.shared.Template[] response) {
        this.response = response;
        return this;
    }
}