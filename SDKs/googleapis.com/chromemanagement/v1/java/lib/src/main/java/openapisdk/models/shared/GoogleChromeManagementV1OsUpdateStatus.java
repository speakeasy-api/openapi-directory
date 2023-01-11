package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1OsUpdateStatus
 * Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
**/
public class GoogleChromeManagementV1OsUpdateStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastRebootTime")
    public String lastRebootTime;
    public GoogleChromeManagementV1OsUpdateStatus withLastRebootTime(String lastRebootTime) {
        this.lastRebootTime = lastRebootTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateCheckTime")
    public String lastUpdateCheckTime;
    public GoogleChromeManagementV1OsUpdateStatus withLastUpdateCheckTime(String lastUpdateCheckTime) {
        this.lastUpdateCheckTime = lastUpdateCheckTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastUpdateTime")
    public String lastUpdateTime;
    public GoogleChromeManagementV1OsUpdateStatus withLastUpdateTime(String lastUpdateTime) {
        this.lastUpdateTime = lastUpdateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newPlatformVersion")
    public String newPlatformVersion;
    public GoogleChromeManagementV1OsUpdateStatus withNewPlatformVersion(String newPlatformVersion) {
        this.newPlatformVersion = newPlatformVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newRequestedPlatformVersion")
    public String newRequestedPlatformVersion;
    public GoogleChromeManagementV1OsUpdateStatus withNewRequestedPlatformVersion(String newRequestedPlatformVersion) {
        this.newRequestedPlatformVersion = newRequestedPlatformVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updateState")
    public GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum updateState;
    public GoogleChromeManagementV1OsUpdateStatus withUpdateState(GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum updateState) {
        this.updateState = updateState;
        return this;
    }
}