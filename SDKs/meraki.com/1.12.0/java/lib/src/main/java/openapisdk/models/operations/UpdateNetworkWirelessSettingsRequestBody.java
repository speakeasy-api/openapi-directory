package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateNetworkWirelessSettingsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipv6BridgeEnabled")
    public Boolean ipv6BridgeEnabled;
    public UpdateNetworkWirelessSettingsRequestBody withIpv6BridgeEnabled(Boolean ipv6BridgeEnabled) {
        this.ipv6BridgeEnabled = ipv6BridgeEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ledLightsOn")
    public Boolean ledLightsOn;
    public UpdateNetworkWirelessSettingsRequestBody withLedLightsOn(Boolean ledLightsOn) {
        this.ledLightsOn = ledLightsOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationAnalyticsEnabled")
    public Boolean locationAnalyticsEnabled;
    public UpdateNetworkWirelessSettingsRequestBody withLocationAnalyticsEnabled(Boolean locationAnalyticsEnabled) {
        this.locationAnalyticsEnabled = locationAnalyticsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meshingEnabled")
    public Boolean meshingEnabled;
    public UpdateNetworkWirelessSettingsRequestBody withMeshingEnabled(Boolean meshingEnabled) {
        this.meshingEnabled = meshingEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("upgradeStrategy")
    public UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum upgradeStrategy;
    public UpdateNetworkWirelessSettingsRequestBody withUpgradeStrategy(UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum upgradeStrategy) {
        this.upgradeStrategy = upgradeStrategy;
        return this;
    }
}