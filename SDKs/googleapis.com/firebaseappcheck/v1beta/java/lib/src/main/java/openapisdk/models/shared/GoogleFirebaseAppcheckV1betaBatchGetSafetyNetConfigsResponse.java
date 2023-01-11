package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse
 * Response message for the BatchGetSafetyNetConfigs method.
**/
public class GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1betaSafetyNetConfig[] configs;
    public GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse withConfigs(GoogleFirebaseAppcheckV1betaSafetyNetConfig[] configs) {
        this.configs = configs;
        return this;
    }
}