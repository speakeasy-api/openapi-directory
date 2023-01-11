package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUrlJson200ApplicationJsonDebug {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Double version;
    public GetUserContentUrlJson200ApplicationJsonDebug withVersion(Double version) {
        this.version = version;
        return this;
    }
}