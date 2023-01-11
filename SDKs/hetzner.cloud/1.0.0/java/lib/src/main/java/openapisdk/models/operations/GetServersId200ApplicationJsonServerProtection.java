package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServersId200ApplicationJsonServerProtection
 * Protection configuration for the Server
**/
public class GetServersId200ApplicationJsonServerProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetServersId200ApplicationJsonServerProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonProperty("rebuild")
    public Boolean rebuild;
    public GetServersId200ApplicationJsonServerProtection withRebuild(Boolean rebuild) {
        this.rebuild = rebuild;
        return this;
    }
}