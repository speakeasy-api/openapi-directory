package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1FindInstalledAppDevicesResponse
 * Response containing a list of devices with queried app installed.
**/
public class GoogleChromeManagementV1FindInstalledAppDevicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("devices")
    public GoogleChromeManagementV1Device[] devices;
    public GoogleChromeManagementV1FindInstalledAppDevicesResponse withDevices(GoogleChromeManagementV1Device[] devices) {
        this.devices = devices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleChromeManagementV1FindInstalledAppDevicesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public GoogleChromeManagementV1FindInstalledAppDevicesResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}