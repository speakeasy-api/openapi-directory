package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PostNetworks201ApplicationJsonNetworkProtection
 * Protection configuration for the Network
**/
public class PostNetworks201ApplicationJsonNetworkProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PostNetworks201ApplicationJsonNetworkProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}