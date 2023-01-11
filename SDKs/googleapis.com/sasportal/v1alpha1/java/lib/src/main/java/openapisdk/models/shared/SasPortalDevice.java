package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SasPortalDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeConfig")
    public SasPortalDeviceConfig activeConfig;
    public SasPortalDevice withActiveConfig(SasPortalDeviceConfig activeConfig) {
        this.activeConfig = activeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentChannels")
    public SasPortalChannelWithScore[] currentChannels;
    public SasPortalDevice withCurrentChannels(SasPortalChannelWithScore[] currentChannels) {
        this.currentChannels = currentChannels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMetadata")
    public SasPortalDeviceMetadata deviceMetadata;
    public SasPortalDevice withDeviceMetadata(SasPortalDeviceMetadata deviceMetadata) {
        this.deviceMetadata = deviceMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SasPortalDevice withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fccId")
    public String fccId;
    public SasPortalDevice withFccId(String fccId) {
        this.fccId = fccId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grantRangeAllowlists")
    public SasPortalFrequencyRange[] grantRangeAllowlists;
    public SasPortalDevice withGrantRangeAllowlists(SasPortalFrequencyRange[] grantRangeAllowlists) {
        this.grantRangeAllowlists = grantRangeAllowlists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grants")
    public SasPortalDeviceGrant[] grants;
    public SasPortalDevice withGrants(SasPortalDeviceGrant[] grants) {
        this.grants = grants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SasPortalDevice withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preloadedConfig")
    public SasPortalDeviceConfig preloadedConfig;
    public SasPortalDevice withPreloadedConfig(SasPortalDeviceConfig preloadedConfig) {
        this.preloadedConfig = preloadedConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public SasPortalDevice withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SasPortalDeviceStateEnum state;
    public SasPortalDevice withState(SasPortalDeviceStateEnum state) {
        this.state = state;
        return this;
    }
}