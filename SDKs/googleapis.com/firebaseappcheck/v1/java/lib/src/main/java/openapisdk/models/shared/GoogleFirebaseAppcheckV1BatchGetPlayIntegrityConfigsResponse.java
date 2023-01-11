package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse
 * Response message for the BatchGetPlayIntegrityConfigs method.
**/
public class GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1PlayIntegrityConfig[] configs;
    public GoogleFirebaseAppcheckV1BatchGetPlayIntegrityConfigsResponse withConfigs(GoogleFirebaseAppcheckV1PlayIntegrityConfig[] configs) {
        this.configs = configs;
        return this;
    }
}