package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
 * Settings related to 5Ghz band
**/
public class CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channelWidth")
    public String channelWidth;
    public CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings withChannelWidth(String channelWidth) {
        this.channelWidth = channelWidth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPower")
    public Long maxPower;
    public CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings withMaxPower(Long maxPower) {
        this.maxPower = maxPower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBitrate")
    public Long minBitrate;
    public CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings withMinBitrate(Long minBitrate) {
        this.minBitrate = minBitrate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minPower")
    public Long minPower;
    public CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings withMinPower(Long minPower) {
        this.minPower = minPower;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rxsop")
    public Long rxsop;
    public CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings withRxsop(Long rxsop) {
        this.rxsop = rxsop;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validAutoChannels")
    public Long[] validAutoChannels;
    public CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings withValidAutoChannels(Long[] validAutoChannels) {
        this.validAutoChannels = validAutoChannels;
        return this;
    }
}