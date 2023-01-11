package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteServersId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public DeleteServersId200ApplicationJsonAction action;
    public DeleteServersId200ApplicationJson withAction(DeleteServersId200ApplicationJsonAction action) {
        this.action = action;
        return this;
    }
}