package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1MemoryStatusReport
 * Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1MemoryStatusReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageFaults")
    public Integer pageFaults;
    public GoogleChromeManagementV1MemoryStatusReport withPageFaults(Integer pageFaults) {
        this.pageFaults = pageFaults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public GoogleChromeManagementV1MemoryStatusReport withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleFrequency")
    public String sampleFrequency;
    public GoogleChromeManagementV1MemoryStatusReport withSampleFrequency(String sampleFrequency) {
        this.sampleFrequency = sampleFrequency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("systemRamFreeBytes")
    public String systemRamFreeBytes;
    public GoogleChromeManagementV1MemoryStatusReport withSystemRamFreeBytes(String systemRamFreeBytes) {
        this.systemRamFreeBytes = systemRamFreeBytes;
        return this;
    }
}