package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutServersId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public PutServersId200ApplicationJsonServer server;
    public PutServersId200ApplicationJson withServer(PutServersId200ApplicationJsonServer server) {
        this.server = server;
        return this;
    }
}