package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings
 * Manual radio settings for 5 GHz.
**/
public class UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public Long channel;
    public UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings withChannel(Long channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelWidth")
    public Long channelWidth;
    public UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings withChannelWidth(Long channelWidth) {
        this.channelWidth = channelWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetPower")
    public Long targetPower;
    public UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings withTargetPower(Long targetPower) {
        this.targetPower = targetPower;
        return this;
    }
}