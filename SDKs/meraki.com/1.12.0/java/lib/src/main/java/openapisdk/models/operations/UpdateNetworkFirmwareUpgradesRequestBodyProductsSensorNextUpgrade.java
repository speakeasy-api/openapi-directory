package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade
 * The pending firmware upgrade if it exists
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toVersion")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion toVersion;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgrade withToVersion(UpdateNetworkFirmwareUpgradesRequestBodyProductsSensorNextUpgradeToVersion toVersion) {
        this.toVersion = toVersion;
        return this;
    }
}