package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
 * Settings related to 2.4Ghz band
**/
public class UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("axEnabled")
    public Boolean axEnabled;
    public UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withAxEnabled(Boolean axEnabled) {
        this.axEnabled = axEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPower")
    public Long maxPower;
    public UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withMaxPower(Long maxPower) {
        this.maxPower = maxPower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBitrate")
    public Float minBitrate;
    public UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withMinBitrate(Float minBitrate) {
        this.minBitrate = minBitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minPower")
    public Long minPower;
    public UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withMinPower(Long minPower) {
        this.minPower = minPower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rxsop")
    public Long rxsop;
    public UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withRxsop(Long rxsop) {
        this.rxsop = rxsop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validAutoChannels")
    public Long[] validAutoChannels;
    public UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withValidAutoChannels(Long[] validAutoChannels) {
        this.validAutoChannels = validAutoChannels;
        return this;
    }
}