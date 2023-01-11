package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
 * Settings related to 2.4Ghz band
**/
public class CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("axEnabled")
    public Boolean axEnabled;
    public CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withAxEnabled(Boolean axEnabled) {
        this.axEnabled = axEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPower")
    public Long maxPower;
    public CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withMaxPower(Long maxPower) {
        this.maxPower = maxPower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBitrate")
    public Float minBitrate;
    public CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withMinBitrate(Float minBitrate) {
        this.minBitrate = minBitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minPower")
    public Long minPower;
    public CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withMinPower(Long minPower) {
        this.minPower = minPower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rxsop")
    public Long rxsop;
    public CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withRxsop(Long rxsop) {
        this.rxsop = rxsop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validAutoChannels")
    public Long[] validAutoChannels;
    public CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings withValidAutoChannels(Long[] validAutoChannels) {
        this.validAutoChannels = validAutoChannels;
        return this;
    }
}