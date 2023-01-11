package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1BatterySampleReport
 * Sampling data for battery. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1BatterySampleReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeRate")
    public Integer chargeRate;
    public GoogleChromeManagementV1BatterySampleReport withChargeRate(Integer chargeRate) {
        this.chargeRate = chargeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current")
    public String current;
    public GoogleChromeManagementV1BatterySampleReport withCurrent(String current) {
        this.current = current;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dischargeRate")
    public Integer dischargeRate;
    public GoogleChromeManagementV1BatterySampleReport withDischargeRate(Integer dischargeRate) {
        this.dischargeRate = dischargeRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remainingCapacity")
    public String remainingCapacity;
    public GoogleChromeManagementV1BatterySampleReport withRemainingCapacity(String remainingCapacity) {
        this.remainingCapacity = remainingCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public GoogleChromeManagementV1BatterySampleReport withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public GoogleChromeManagementV1BatterySampleReport withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temperature")
    public Integer temperature;
    public GoogleChromeManagementV1BatterySampleReport withTemperature(Integer temperature) {
        this.temperature = temperature;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voltage")
    public String voltage;
    public GoogleChromeManagementV1BatterySampleReport withVoltage(String voltage) {
        this.voltage = voltage;
        return this;
    }
}