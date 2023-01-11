package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNetworkWirelessRfProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apBandSettings")
    public CreateNetworkWirelessRfProfileRequestBodyApBandSettings apBandSettings;
    public CreateNetworkWirelessRfProfileRequestBody withApBandSettings(CreateNetworkWirelessRfProfileRequestBodyApBandSettings apBandSettings) {
        this.apBandSettings = apBandSettings;
        return this;
    }
    @JsonProperty("bandSelectionType")
    public CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum bandSelectionType;
    public CreateNetworkWirelessRfProfileRequestBody withBandSelectionType(CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum bandSelectionType) {
        this.bandSelectionType = bandSelectionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientBalancingEnabled")
    public Boolean clientBalancingEnabled;
    public CreateNetworkWirelessRfProfileRequestBody withClientBalancingEnabled(Boolean clientBalancingEnabled) {
        this.clientBalancingEnabled = clientBalancingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fiveGhzSettings")
    public CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings fiveGhzSettings;
    public CreateNetworkWirelessRfProfileRequestBody withFiveGhzSettings(CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings fiveGhzSettings) {
        this.fiveGhzSettings = fiveGhzSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBitrateType")
    public CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum minBitrateType;
    public CreateNetworkWirelessRfProfileRequestBody withMinBitrateType(CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum minBitrateType) {
        this.minBitrateType = minBitrateType;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateNetworkWirelessRfProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("twoFourGhzSettings")
    public CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings twoFourGhzSettings;
    public CreateNetworkWirelessRfProfileRequestBody withTwoFourGhzSettings(CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings twoFourGhzSettings) {
        this.twoFourGhzSettings = twoFourGhzSettings;
        return this;
    }
}