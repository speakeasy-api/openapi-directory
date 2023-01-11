package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNetworksId200ApplicationJsonNetworkProtection
 * Protection configuration for the Network
**/
public class GetNetworksId200ApplicationJsonNetworkProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetNetworksId200ApplicationJsonNetworkProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}