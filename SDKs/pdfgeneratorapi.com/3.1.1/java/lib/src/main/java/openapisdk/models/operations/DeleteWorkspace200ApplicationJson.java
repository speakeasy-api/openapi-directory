package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public DeleteWorkspace200ApplicationJsonResponse response;
    public DeleteWorkspace200ApplicationJson withResponse(DeleteWorkspace200ApplicationJsonResponse response) {
        this.response = response;
        return this;
    }
}