package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateNetworkSwitchSettingsRequestBodyPowerExceptions {
    @JsonProperty("powerType")
    public UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum powerType;
    public UpdateNetworkSwitchSettingsRequestBodyPowerExceptions withPowerType(UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum powerType) {
        this.powerType = powerType;
        return this;
    }
    @JsonProperty("serial")
    public String serial;
    public UpdateNetworkSwitchSettingsRequestBodyPowerExceptions withSerial(String serial) {
        this.serial = serial;
        return this;
    }
}