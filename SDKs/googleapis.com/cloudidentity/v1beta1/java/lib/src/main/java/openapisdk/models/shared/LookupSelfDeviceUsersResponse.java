package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LookupSelfDeviceUsersResponse
 * Response containing resource names of the DeviceUsers associated with the caller's credentials.
**/
public class LookupSelfDeviceUsersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public LookupSelfDeviceUsersResponse withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("names")
    public String[] names;
    public LookupSelfDeviceUsersResponse withNames(String[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public LookupSelfDeviceUsersResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}