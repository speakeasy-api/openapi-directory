package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse
 * Response message for the BatchGetDeviceCheckConfigs method.
**/
public class GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1betaDeviceCheckConfig[] configs;
    public GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse withConfigs(GoogleFirebaseAppcheckV1betaDeviceCheckConfig[] configs) {
        this.configs = configs;
        return this;
    }
}