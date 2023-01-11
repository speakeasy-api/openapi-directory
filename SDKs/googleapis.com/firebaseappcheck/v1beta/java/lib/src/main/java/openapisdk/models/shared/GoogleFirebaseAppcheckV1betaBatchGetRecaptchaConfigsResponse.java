package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse
 * Response message for the BatchGetRecaptchaConfigs method.
**/
public class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1betaRecaptchaConfig[] configs;
    public GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse withConfigs(GoogleFirebaseAppcheckV1betaRecaptchaConfig[] configs) {
        this.configs = configs;
        return this;
    }
}