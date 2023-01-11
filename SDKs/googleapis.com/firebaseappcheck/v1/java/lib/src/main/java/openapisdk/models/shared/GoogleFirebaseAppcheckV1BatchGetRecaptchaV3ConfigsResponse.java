package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse
 * Response message for the BatchGetRecaptchaV3Configs method.
**/
public class GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1RecaptchaV3Config[] configs;
    public GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse withConfigs(GoogleFirebaseAppcheckV1RecaptchaV3Config[] configs) {
        this.configs = configs;
        return this;
    }
}