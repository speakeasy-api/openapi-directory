package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetServers200ApplicationJsonServersImageProtection
 * Protection configuration for the Resource
**/
public class GetServers200ApplicationJsonServersImageProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetServers200ApplicationJsonServersImageProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}