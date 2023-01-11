package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SasPortalDeviceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeConfig")
    public SasPortalDeviceConfig activeConfig;
    public SasPortalDeviceInput withActiveConfig(SasPortalDeviceConfig activeConfig) {
        this.activeConfig = activeConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceMetadata")
    public SasPortalDeviceMetadataInput deviceMetadata;
    public SasPortalDeviceInput withDeviceMetadata(SasPortalDeviceMetadataInput deviceMetadata) {
        this.deviceMetadata = deviceMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public SasPortalDeviceInput withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fccId")
    public String fccId;
    public SasPortalDeviceInput withFccId(String fccId) {
        this.fccId = fccId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grantRangeAllowlists")
    public SasPortalFrequencyRange[] grantRangeAllowlists;
    public SasPortalDeviceInput withGrantRangeAllowlists(SasPortalFrequencyRange[] grantRangeAllowlists) {
        this.grantRangeAllowlists = grantRangeAllowlists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grants")
    public SasPortalDeviceGrant[] grants;
    public SasPortalDeviceInput withGrants(SasPortalDeviceGrant[] grants) {
        this.grants = grants;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SasPortalDeviceInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("preloadedConfig")
    public SasPortalDeviceConfig preloadedConfig;
    public SasPortalDeviceInput withPreloadedConfig(SasPortalDeviceConfig preloadedConfig) {
        this.preloadedConfig = preloadedConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public SasPortalDeviceInput withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SasPortalDeviceStateEnum state;
    public SasPortalDeviceInput withState(SasPortalDeviceStateEnum state) {
        this.state = state;
        return this;
    }
}