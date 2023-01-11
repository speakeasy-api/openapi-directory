package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1GraphicsInfo
 * Information of the graphics subsystem. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceGraphicsStatus](https://chromeenterprise.google/policies/#ReportDeviceGraphicsStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1GraphicsInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adapterInfo")
    public GoogleChromeManagementV1GraphicsAdapterInfo adapterInfo;
    public GoogleChromeManagementV1GraphicsInfo withAdapterInfo(GoogleChromeManagementV1GraphicsAdapterInfo adapterInfo) {
        this.adapterInfo = adapterInfo;
        return this;
    }
}