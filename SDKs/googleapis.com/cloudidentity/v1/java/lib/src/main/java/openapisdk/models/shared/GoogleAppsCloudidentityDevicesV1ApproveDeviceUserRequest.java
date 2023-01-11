package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest
 * Request message for approving the device to access user data.
**/
public class GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public GoogleAppsCloudidentityDevicesV1ApproveDeviceUserRequest withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}