package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1CpuInfo
 * CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1CpuInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("architecture")
    public GoogleChromeManagementV1CpuInfoArchitectureEnum architecture;
    public GoogleChromeManagementV1CpuInfo withArchitecture(GoogleChromeManagementV1CpuInfoArchitectureEnum architecture) {
        this.architecture = architecture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keylockerConfigured")
    public Boolean keylockerConfigured;
    public GoogleChromeManagementV1CpuInfo withKeylockerConfigured(Boolean keylockerConfigured) {
        this.keylockerConfigured = keylockerConfigured;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keylockerSupported")
    public Boolean keylockerSupported;
    public GoogleChromeManagementV1CpuInfo withKeylockerSupported(Boolean keylockerSupported) {
        this.keylockerSupported = keylockerSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxClockSpeed")
    public Integer maxClockSpeed;
    public GoogleChromeManagementV1CpuInfo withMaxClockSpeed(Integer maxClockSpeed) {
        this.maxClockSpeed = maxClockSpeed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public GoogleChromeManagementV1CpuInfo withModel(String model) {
        this.model = model;
        return this;
    }
}