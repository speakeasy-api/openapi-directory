package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutServersId200ApplicationJsonServerProtection
 * Protection configuration for the Server
**/
public class PutServersId200ApplicationJsonServerProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PutServersId200ApplicationJsonServerProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonProperty("rebuild")
    public Boolean rebuild;
    public PutServersId200ApplicationJsonServerProtection withRebuild(Boolean rebuild) {
        this.rebuild = rebuild;
        return this;
    }
}