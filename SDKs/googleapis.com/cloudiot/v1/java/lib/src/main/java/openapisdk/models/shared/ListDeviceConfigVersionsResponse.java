package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeviceConfigVersionsResponse
 * Response for `ListDeviceConfigVersions`.
**/
public class ListDeviceConfigVersionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceConfigs")
    public DeviceConfig[] deviceConfigs;
    public ListDeviceConfigVersionsResponse withDeviceConfigs(DeviceConfig[] deviceConfigs) {
        this.deviceConfigs = deviceConfigs;
        return this;
    }
}