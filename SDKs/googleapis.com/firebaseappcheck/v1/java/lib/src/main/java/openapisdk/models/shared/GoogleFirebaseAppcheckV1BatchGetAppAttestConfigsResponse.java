package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse
 * Response message for the BatchGetAppAttestConfigs method.
**/
public class GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1AppAttestConfig[] configs;
    public GoogleFirebaseAppcheckV1BatchGetAppAttestConfigsResponse withConfigs(GoogleFirebaseAppcheckV1AppAttestConfig[] configs) {
        this.configs = configs;
        return this;
    }
}