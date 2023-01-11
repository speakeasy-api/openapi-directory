package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1CpuStatusReport
 * Provides information about the status of the CPU. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1CpuStatusReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuTemperatureInfo")
    public GoogleChromeManagementV1CpuTemperatureInfo[] cpuTemperatureInfo;
    public GoogleChromeManagementV1CpuStatusReport withCpuTemperatureInfo(GoogleChromeManagementV1CpuTemperatureInfo[] cpuTemperatureInfo) {
        this.cpuTemperatureInfo = cpuTemperatureInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cpuUtilizationPct")
    public Integer cpuUtilizationPct;
    public GoogleChromeManagementV1CpuStatusReport withCpuUtilizationPct(Integer cpuUtilizationPct) {
        this.cpuUtilizationPct = cpuUtilizationPct;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public GoogleChromeManagementV1CpuStatusReport withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleFrequency")
    public String sampleFrequency;
    public GoogleChromeManagementV1CpuStatusReport withSampleFrequency(String sampleFrequency) {
        this.sampleFrequency = sampleFrequency;
        return this;
    }
}