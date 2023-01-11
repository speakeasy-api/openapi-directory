package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade
 * The pending firmware upgrade if it exists
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toVersion")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion toVersion;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgrade withToVersion(UpdateNetworkFirmwareUpgradesRequestBodyProductsEnvironmentalNextUpgradeToVersion toVersion) {
        this.toVersion = toVersion;
        return this;
    }
}