package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeviceUsersResponse
 * Response message that is returned from the ListDeviceUsers method.
**/
public class ListDeviceUsersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceUsers")
    public DeviceUser[] deviceUsers;
    public ListDeviceUsersResponse withDeviceUsers(DeviceUser[] deviceUsers) {
        this.deviceUsers = deviceUsers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListDeviceUsersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}