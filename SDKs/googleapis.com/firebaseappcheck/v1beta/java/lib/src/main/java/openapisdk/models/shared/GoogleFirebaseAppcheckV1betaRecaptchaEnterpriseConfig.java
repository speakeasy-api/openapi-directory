package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig
 * An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
**/
public class GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteKey")
    public String siteKey;
    public GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig withSiteKey(String siteKey) {
        this.siteKey = siteKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenTtl")
    public String tokenTtl;
    public GoogleFirebaseAppcheckV1betaRecaptchaEnterpriseConfig withTokenTtl(String tokenTtl) {
        this.tokenTtl = tokenTtl;
        return this;
    }
}