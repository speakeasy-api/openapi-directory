package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ModifyAllowedNetworks200ApplicationJsonData
 * Information about the allowed_networks settings
**/
public class ModifyAllowedNetworks200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowed_networks")
    public Object[] allowedNetworks;
    public ModifyAllowedNetworks200ApplicationJsonData withAllowedNetworks(Object[] allowedNetworks) {
        this.allowedNetworks = allowedNetworks;
        return this;
    }
}