package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PutNetworksId200ApplicationJsonNetworkProtection
 * Protection configuration for the Network
**/
public class PutNetworksId200ApplicationJsonNetworkProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public PutNetworksId200ApplicationJsonNetworkProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}