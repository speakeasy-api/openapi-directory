package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse
 * Response message for the BatchGetRecaptchaEnterpriseConfigs method.
**/
public class GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig[] configs;
    public GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse withConfigs(GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig[] configs) {
        this.configs = configs;
        return this;
    }
}