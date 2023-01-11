package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1GraphicsStatusReport
 * Information of the graphics subsystem. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceGraphicsInfo](https://chromeenterprise.google/policies/#ReportDeviceGraphicsInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1GraphicsStatusReport {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displays")
    public GoogleChromeManagementV1DisplayInfo[] displays;
    public GoogleChromeManagementV1GraphicsStatusReport withDisplays(GoogleChromeManagementV1DisplayInfo[] displays) {
        this.displays = displays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportTime")
    public String reportTime;
    public GoogleChromeManagementV1GraphicsStatusReport withReportTime(String reportTime) {
        this.reportTime = reportTime;
        return this;
    }
}