package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetServers200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetServers200ApplicationJsonMeta meta;
    public GetServers200ApplicationJson withMeta(GetServers200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("servers")
    public GetServers200ApplicationJsonServers[] servers;
    public GetServers200ApplicationJson withServers(GetServers200ApplicationJsonServers[] servers) {
        this.servers = servers;
        return this;
    }
}