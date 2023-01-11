package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Get200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Get200ApplicationJsonStatusEnum status;
    public Get200ApplicationJson withStatus(Get200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
}