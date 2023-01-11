package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest
 * Request message for blocking account on device.
**/
public class GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public GoogleAppsCloudidentityDevicesV1BlockDeviceUserRequest withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}