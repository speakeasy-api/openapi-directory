package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest
 * Request message for starting an account wipe on device.
**/
public class GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public GoogleAppsCloudidentityDevicesV1WipeDeviceUserRequest withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}