package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public openapisdk.models.shared.Workspace response;
    public GetWorkspace200ApplicationJson withResponse(openapisdk.models.shared.Workspace response) {
        this.response = response;
        return this;
    }
}