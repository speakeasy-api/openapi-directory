package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost
 * The network device to be updated
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextUpgrade")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade nextUpgrade;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHost withNextUpgrade(UpdateNetworkFirmwareUpgradesRequestBodyProductsVmxHostNextUpgrade nextUpgrade) {
        this.nextUpgrade = nextUpgrade;
        return this;
    }
}