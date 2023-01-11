package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1BatteryInfo
 * Information about the battery. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDevicePowerStatus](https://chromeenterprise.google/policies/#ReportDevicePowerStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1BatteryInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designCapacity")
    public String designCapacity;
    public GoogleChromeManagementV1BatteryInfo withDesignCapacity(String designCapacity) {
        this.designCapacity = designCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("designMinVoltage")
    public Integer designMinVoltage;
    public GoogleChromeManagementV1BatteryInfo withDesignMinVoltage(Integer designMinVoltage) {
        this.designMinVoltage = designMinVoltage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufactureDate")
    public GoogleTypeDate manufactureDate;
    public GoogleChromeManagementV1BatteryInfo withManufactureDate(GoogleTypeDate manufactureDate) {
        this.manufactureDate = manufactureDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("manufacturer")
    public String manufacturer;
    public GoogleChromeManagementV1BatteryInfo withManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public GoogleChromeManagementV1BatteryInfo withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("technology")
    public String technology;
    public GoogleChromeManagementV1BatteryInfo withTechnology(String technology) {
        this.technology = technology;
        return this;
    }
}