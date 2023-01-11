package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse
 * Response message for the BatchGetSafetyNetConfigs method.
**/
public class GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1SafetyNetConfig[] configs;
    public GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse withConfigs(GoogleFirebaseAppcheckV1SafetyNetConfig[] configs) {
        this.configs = configs;
        return this;
    }
}