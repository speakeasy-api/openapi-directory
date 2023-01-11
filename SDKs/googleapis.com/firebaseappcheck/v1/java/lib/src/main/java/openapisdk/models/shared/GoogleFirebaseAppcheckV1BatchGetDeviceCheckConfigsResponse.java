package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse
 * Response message for the BatchGetDeviceCheckConfigs method.
**/
public class GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1DeviceCheckConfig[] configs;
    public GoogleFirebaseAppcheckV1BatchGetDeviceCheckConfigsResponse withConfigs(GoogleFirebaseAppcheckV1DeviceCheckConfig[] configs) {
        this.configs = configs;
        return this;
    }
}