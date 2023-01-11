package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse
 * Response containing resource names of the DeviceUsers associated with the caller's credentials.
**/
public class GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public String[] names;
    public GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse withNames(String[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleAppsCloudidentityDevicesV1LookupSelfDeviceUsersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}