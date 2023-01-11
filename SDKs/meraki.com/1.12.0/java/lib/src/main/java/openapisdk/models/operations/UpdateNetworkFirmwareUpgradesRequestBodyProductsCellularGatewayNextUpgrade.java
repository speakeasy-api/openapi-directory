package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade
 * The pending firmware upgrade if it exists
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toVersion")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion toVersion;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgrade withToVersion(UpdateNetworkFirmwareUpgradesRequestBodyProductsCellularGatewayNextUpgradeToVersion toVersion) {
        this.toVersion = toVersion;
        return this;
    }
}