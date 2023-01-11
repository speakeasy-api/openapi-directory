package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest
 * Request message for cancelling an unfinished user account wipe.
**/
public class GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer")
    public String customer;
    public GoogleAppsCloudidentityDevicesV1CancelWipeDeviceUserRequest withCustomer(String customer) {
        this.customer = customer;
        return this;
    }
}