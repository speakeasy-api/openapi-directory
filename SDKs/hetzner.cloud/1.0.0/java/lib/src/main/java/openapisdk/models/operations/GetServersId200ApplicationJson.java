package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServersId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("server")
    public GetServersId200ApplicationJsonServer server;
    public GetServersId200ApplicationJson withServer(GetServersId200ApplicationJsonServer server) {
        this.server = server;
        return this;
    }
}