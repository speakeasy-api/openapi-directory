package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceCameraWirelessProfilesRequestBodyIds
 * The ids of the wireless profile to assign to the given camera
**/
public class UpdateDeviceCameraWirelessProfilesRequestBodyIds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backup")
    public String backup;
    public UpdateDeviceCameraWirelessProfilesRequestBodyIds withBackup(String backup) {
        this.backup = backup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public String primary;
    public UpdateDeviceCameraWirelessProfilesRequestBodyIds withPrimary(String primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondary")
    public String secondary;
    public UpdateDeviceCameraWirelessProfilesRequestBodyIds withSecondary(String secondary) {
        this.secondary = secondary;
        return this;
    }
}