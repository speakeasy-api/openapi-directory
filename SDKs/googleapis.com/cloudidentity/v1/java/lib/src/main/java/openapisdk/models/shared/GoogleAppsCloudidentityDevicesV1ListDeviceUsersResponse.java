package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse
 * Response message that is returned from the ListDeviceUsers method.
**/
public class GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceUsers")
    public GoogleAppsCloudidentityDevicesV1DeviceUser[] deviceUsers;
    public GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse withDeviceUsers(GoogleAppsCloudidentityDevicesV1DeviceUser[] deviceUsers) {
        this.deviceUsers = deviceUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAppsCloudidentityDevicesV1ListDeviceUsersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}