package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse
 * Response message for the BatchGetRecaptchaV3Configs method.
**/
public class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1betaRecaptchaV3Config[] configs;
    public GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse withConfigs(GoogleFirebaseAppcheckV1betaRecaptchaV3Config[] configs) {
        this.configs = configs;
        return this;
    }
}