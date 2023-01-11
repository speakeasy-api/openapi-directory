package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade
 * The pending firmware upgrade if it exists
**/
public class UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time")
    public String time;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade withTime(String time) {
        this.time = time;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toVersion")
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion toVersion;
    public UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgrade withToVersion(UpdateNetworkFirmwareUpgradesRequestBodyProductsCameraNextUpgradeToVersion toVersion) {
        this.toVersion = toVersion;
        return this;
    }
}