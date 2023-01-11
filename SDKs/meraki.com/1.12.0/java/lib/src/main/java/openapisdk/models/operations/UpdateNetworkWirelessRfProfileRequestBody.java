package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessRfProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apBandSettings")
    public UpdateNetworkWirelessRfProfileRequestBodyApBandSettings apBandSettings;
    public UpdateNetworkWirelessRfProfileRequestBody withApBandSettings(UpdateNetworkWirelessRfProfileRequestBodyApBandSettings apBandSettings) {
        this.apBandSettings = apBandSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bandSelectionType")
    public UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum bandSelectionType;
    public UpdateNetworkWirelessRfProfileRequestBody withBandSelectionType(UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum bandSelectionType) {
        this.bandSelectionType = bandSelectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientBalancingEnabled")
    public Boolean clientBalancingEnabled;
    public UpdateNetworkWirelessRfProfileRequestBody withClientBalancingEnabled(Boolean clientBalancingEnabled) {
        this.clientBalancingEnabled = clientBalancingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fiveGhzSettings")
    public UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings fiveGhzSettings;
    public UpdateNetworkWirelessRfProfileRequestBody withFiveGhzSettings(UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings fiveGhzSettings) {
        this.fiveGhzSettings = fiveGhzSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBitrateType")
    public UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum minBitrateType;
    public UpdateNetworkWirelessRfProfileRequestBody withMinBitrateType(UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum minBitrateType) {
        this.minBitrateType = minBitrateType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateNetworkWirelessRfProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twoFourGhzSettings")
    public UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings twoFourGhzSettings;
    public UpdateNetworkWirelessRfProfileRequestBody withTwoFourGhzSettings(UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings twoFourGhzSettings) {
        this.twoFourGhzSettings = twoFourGhzSettings;
        return this;
    }
}