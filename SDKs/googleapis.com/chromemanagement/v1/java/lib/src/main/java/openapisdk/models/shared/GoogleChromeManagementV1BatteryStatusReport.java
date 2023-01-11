package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1BatteryStatusReport
 * Status data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1BatteryStatusReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batteryHealth")
    public GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum batteryHealth;
    public GoogleChromeManagementV1BatteryStatusReport withBatteryHealth(GoogleChromeManagementV1BatteryStatusReportBatteryHealthEnum batteryHealth) {
        this.batteryHealth = batteryHealth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycleCount")
    public Integer cycleCount;
    public GoogleChromeManagementV1BatteryStatusReport withCycleCount(Integer cycleCount) {
        this.cycleCount = cycleCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullChargeCapacity")
    public String fullChargeCapacity;
    public GoogleChromeManagementV1BatteryStatusReport withFullChargeCapacity(String fullChargeCapacity) {
        this.fullChargeCapacity = fullChargeCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public GoogleChromeManagementV1BatteryStatusReport withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sample")
    public GoogleChromeManagementV1BatterySampleReport[] sample;
    public GoogleChromeManagementV1BatteryStatusReport withSample(GoogleChromeManagementV1BatterySampleReport[] sample) {
        this.sample = sample;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public GoogleChromeManagementV1BatteryStatusReport withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
}