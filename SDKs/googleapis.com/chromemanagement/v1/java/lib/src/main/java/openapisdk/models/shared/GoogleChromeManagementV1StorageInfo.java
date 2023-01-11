package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1StorageInfo
 * Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1StorageInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableDiskBytes")
    public String availableDiskBytes;
    public GoogleChromeManagementV1StorageInfo withAvailableDiskBytes(String availableDiskBytes) {
        this.availableDiskBytes = availableDiskBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDiskBytes")
    public String totalDiskBytes;
    public GoogleChromeManagementV1StorageInfo withTotalDiskBytes(String totalDiskBytes) {
        this.totalDiskBytes = totalDiskBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public GoogleChromeManagementV1StorageInfoDiskVolume[] volume;
    public GoogleChromeManagementV1StorageInfo withVolume(GoogleChromeManagementV1StorageInfoDiskVolume[] volume) {
        this.volume = volume;
        return this;
    }
}