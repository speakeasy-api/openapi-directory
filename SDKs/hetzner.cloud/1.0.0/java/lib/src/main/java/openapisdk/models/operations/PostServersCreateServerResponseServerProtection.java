package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostServersCreateServerResponseServerProtection
 * Protection configuration for the Server
**/
public class PostServersCreateServerResponseServerProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PostServersCreateServerResponseServerProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
    @JsonProperty("rebuild")
    public Boolean rebuild;
    public PostServersCreateServerResponseServerProtection withRebuild(Boolean rebuild) {
        this.rebuild = rebuild;
        return this;
    }
}