package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse
 * Response containing a list of devices expiring in each month of a selected time frame. Counts are grouped by model and Auto Update Expiration date.
**/
public class GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceAueCountReports")
    public GoogleChromeManagementV1DeviceAueCountReport[] deviceAueCountReports;
    public GoogleChromeManagementV1CountChromeDevicesReachingAutoExpirationDateResponse withDeviceAueCountReports(GoogleChromeManagementV1DeviceAueCountReport[] deviceAueCountReports) {
        this.deviceAueCountReports = deviceAueCountReports;
        return this;
    }
}