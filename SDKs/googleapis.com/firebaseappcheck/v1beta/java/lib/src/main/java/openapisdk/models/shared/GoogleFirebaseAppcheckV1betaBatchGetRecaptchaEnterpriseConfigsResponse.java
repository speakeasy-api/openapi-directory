package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse
 * Response message for the BatchGetRecaptchaEnterpriseConfigs method.
**/
public class GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configs")
    public GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig[] configs;
    public GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse withConfigs(GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig[] configs) {
        this.configs = configs;
        return this;
    }
}