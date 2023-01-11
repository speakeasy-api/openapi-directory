package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateDeviceWirelessRadioSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fiveGhzSettings")
    public UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings fiveGhzSettings;
    public UpdateDeviceWirelessRadioSettingsRequestBody withFiveGhzSettings(UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings fiveGhzSettings) {
        this.fiveGhzSettings = fiveGhzSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rfProfileId")
    public Long rfProfileId;
    public UpdateDeviceWirelessRadioSettingsRequestBody withRfProfileId(Long rfProfileId) {
        this.rfProfileId = rfProfileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twoFourGhzSettings")
    public UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings twoFourGhzSettings;
    public UpdateDeviceWirelessRadioSettingsRequestBody withTwoFourGhzSettings(UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings twoFourGhzSettings) {
        this.twoFourGhzSettings = twoFourGhzSettings;
        return this;
    }
}