package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance
 * The network device to be updated
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextUpgrade")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade nextUpgrade;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsAppliance withNextUpgrade(UpdateNetworkFirmwareUpgradesRequestBodyProductsApplianceNextUpgrade nextUpgrade) {
        this.nextUpgrade = nextUpgrade;
        return this;
    }
}