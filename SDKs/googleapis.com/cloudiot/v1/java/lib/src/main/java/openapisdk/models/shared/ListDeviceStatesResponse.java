package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeviceStatesResponse
 * Response for `ListDeviceStates`.
**/
public class ListDeviceStatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceStates")
    public DeviceState[] deviceStates;
    public ListDeviceStatesResponse withDeviceStates(DeviceState[] deviceStates) {
        this.deviceStates = deviceStates;
        return this;
    }
}