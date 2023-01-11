package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConnectedDevice {
    @JsonProperty("device")
    public Device device;
    public ConnectedDevice withDevice(Device device) {
        this.device = device;
        return this;
    }
    @JsonProperty("enabled_profiles")
    public Integer enabledProfiles;
    public ConnectedDevice withEnabledProfiles(Integer enabledProfiles) {
        this.enabledProfiles = enabledProfiles;
        return this;
    }
}