package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse
 * Response message for the BatchGetAppAttestConfigs method.
**/
public class GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1betaAppAttestConfig[] configs;
    public GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse withConfigs(GoogleFirebaseAppcheckV1betaAppAttestConfig[] configs) {
        this.configs = configs;
        return this;
    }
}