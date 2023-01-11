package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAllowedNetworks200ApplicationJsonDataSettings {
    @JsonProperty("allowed_networks")
    public Object[] allowedNetworks;
    public GetAllowedNetworks200ApplicationJsonDataSettings withAllowedNetworks(Object[] allowedNetworks) {
        this.allowedNetworks = allowedNetworks;
        return this;
    }
}