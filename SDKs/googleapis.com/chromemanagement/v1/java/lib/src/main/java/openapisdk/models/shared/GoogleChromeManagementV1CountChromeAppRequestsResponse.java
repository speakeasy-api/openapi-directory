package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleChromeManagementV1CountChromeAppRequestsResponse
 * Response containing summary of requested app installations.
**/
public class GoogleChromeManagementV1CountChromeAppRequestsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleChromeManagementV1CountChromeAppRequestsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedApps")
    public GoogleChromeManagementV1ChromeAppRequest[] requestedApps;
    public GoogleChromeManagementV1CountChromeAppRequestsResponse withRequestedApps(GoogleChromeManagementV1ChromeAppRequest[] requestedApps) {
        this.requestedApps = requestedApps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalSize")
    public Integer totalSize;
    public GoogleChromeManagementV1CountChromeAppRequestsResponse withTotalSize(Integer totalSize) {
        this.totalSize = totalSize;
        return this;
    }
}