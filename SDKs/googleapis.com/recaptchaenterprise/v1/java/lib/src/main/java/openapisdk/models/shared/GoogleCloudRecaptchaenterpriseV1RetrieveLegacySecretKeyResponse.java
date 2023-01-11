package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse
 * Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA.
**/
public class GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("legacySecretKey")
    public String legacySecretKey;
    public GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse withLegacySecretKey(String legacySecretKey) {
        this.legacySecretKey = legacySecretKey;
        return this;
    }
}