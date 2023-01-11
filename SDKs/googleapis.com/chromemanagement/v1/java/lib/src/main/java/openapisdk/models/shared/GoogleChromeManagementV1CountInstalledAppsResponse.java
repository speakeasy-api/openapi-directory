package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1CountInstalledAppsResponse
 * Response containing details of queried installed apps.
**/
public class GoogleChromeManagementV1CountInstalledAppsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("installedApps")
    public GoogleChromeManagementV1InstalledApp[] installedApps;
    public GoogleChromeManagementV1CountInstalledAppsResponse withInstalledApps(GoogleChromeManagementV1InstalledApp[] installedApps) {
        this.installedApps = installedApps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleChromeManagementV1CountInstalledAppsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public GoogleChromeManagementV1CountInstalledAppsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}