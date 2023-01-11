package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse
 * Response message for the BatchGetPlayIntegrityConfigs method.
**/
public class GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1betaPlayIntegrityConfig[] configs;
    public GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse withConfigs(GoogleFirebaseAppcheckV1betaPlayIntegrityConfig[] configs) {
        this.configs = configs;
        return this;
    }
}