package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade
 * The pending firmware upgrade if it exists
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toVersion")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion toVersion;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgrade withToVersion(UpdateNetworkFirmwareUpgradesRequestBodyProductsWirelessNextUpgradeToVersion toVersion) {
        this.toVersion = toVersion;
        return this;
    }
}