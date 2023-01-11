package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ModifyAllowedNetworksRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_networks")
    public ModifyAllowedNetworksRequestBodyAllowedNetworks allowedNetworks;
    public ModifyAllowedNetworksRequestBody withAllowedNetworks(ModifyAllowedNetworksRequestBodyAllowedNetworks allowedNetworks) {
        this.allowedNetworks = allowedNetworks;
        return this;
    }
}