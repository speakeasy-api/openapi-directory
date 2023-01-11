package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteTemplate200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response")
    public DeleteTemplate200ApplicationJsonResponse response;
    public DeleteTemplate200ApplicationJson withResponse(DeleteTemplate200ApplicationJsonResponse response) {
        this.response = response;
        return this;
    }
}