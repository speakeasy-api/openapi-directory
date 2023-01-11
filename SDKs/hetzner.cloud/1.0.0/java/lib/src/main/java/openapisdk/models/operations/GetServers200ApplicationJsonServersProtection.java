package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersProtection
 * Protection configuration for the Server
**/
public class GetServers200ApplicationJsonServersProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetServers200ApplicationJsonServersProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonProperty("rebuild")
    public Boolean rebuild;
    public GetServers200ApplicationJsonServersProtection withRebuild(Boolean rebuild) {
        this.rebuild = rebuild;
        return this;
    }
}