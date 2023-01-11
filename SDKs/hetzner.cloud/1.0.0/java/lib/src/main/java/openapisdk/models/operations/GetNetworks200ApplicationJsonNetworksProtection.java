package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetNetworks200ApplicationJsonNetworksProtection
 * Protection configuration for the Network
**/
public class GetNetworks200ApplicationJsonNetworksProtection {
    @JsonProperty("delete")
    public Boolean delete;
    public GetNetworks200ApplicationJsonNetworksProtection withDelete(Boolean delete) {
        this.delete = delete;
        return this;
    }
}