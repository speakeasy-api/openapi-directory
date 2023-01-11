package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway
 * The network device to be updated
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextUpgrade")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade nextUpgrade;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGateway withNextUpgrade(UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade nextUpgrade) {
        this.nextUpgrade = nextUpgrade;
        return this;
    }
}