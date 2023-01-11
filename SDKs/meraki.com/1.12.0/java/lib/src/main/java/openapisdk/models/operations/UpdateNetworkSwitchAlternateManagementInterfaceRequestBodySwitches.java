package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches {
    @JsonProperty("alternateManagementIp")
    public String alternateManagementIp;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches withAlternateManagementIp(String alternateManagementIp) {
        this.alternateManagementIp = alternateManagementIp;
        return this;
    }
    @JsonProperty("serial")
    public String serial;
    public UpdateNetworkSwitchAlternateManagementInterfaceRequestBodySwitches withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}