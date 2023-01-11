package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings
 * Manual radio settings for 2.4 GHz.
**/
public class UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public Long channel;
    public UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings withChannel(Long channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetPower")
    public Long targetPower;
    public UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings withTargetPower(Long targetPower) {
        this.targetPower = targetPower;
        return this;
    }
}