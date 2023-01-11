package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SasPortalDeviceConfig
 * Information about the device configuration.
**/
public class SasPortalDeviceConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("airInterface")
    public SasPortalDeviceAirInterface airInterface;
    public SasPortalDeviceConfig withAirInterface(SasPortalDeviceAirInterface airInterface) {
        this.airInterface = airInterface;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callSign")
    public String callSign;
    public SasPortalDeviceConfig withCallSign(String callSign) {
        this.callSign = callSign;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public SasPortalDeviceConfigCategoryEnum category;
    public SasPortalDeviceConfig withCategory(SasPortalDeviceConfigCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installationParams")
    public SasPortalInstallationParams installationParams;
    public SasPortalDeviceConfig withInstallationParams(SasPortalInstallationParams installationParams) {
        this.installationParams = installationParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isSigned")
    public Boolean isSigned;
    public SasPortalDeviceConfig withIsSigned(Boolean isSigned) {
        this.isSigned = isSigned;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurementCapabilities")
    public SasPortalDeviceConfigMeasurementCapabilitiesEnum[] measurementCapabilities;
    public SasPortalDeviceConfig withMeasurementCapabilities(SasPortalDeviceConfigMeasurementCapabilitiesEnum[] measurementCapabilities) {
        this.measurementCapabilities = measurementCapabilities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public SasPortalDeviceModel model;
    public SasPortalDeviceConfig withModel(SasPortalDeviceModel model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public SasPortalDeviceConfigStateEnum state;
    public SasPortalDeviceConfig withState(SasPortalDeviceConfigStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateTime")
    public String updateTime;
    public SasPortalDeviceConfig withUpdateTime(String updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public String userId;
    public SasPortalDeviceConfig withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}