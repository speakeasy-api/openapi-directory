package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFirebaseAppcheckV1betaRecaptchaV3Config
 * An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
**/
public class GoogleFirebaseAppcheckV1betaRecaptchaV3Config {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFirebaseAppcheckV1betaRecaptchaV3Config withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteSecret")
    public String siteSecret;
    public GoogleFirebaseAppcheckV1betaRecaptchaV3Config withSiteSecret(String siteSecret) {
        this.siteSecret = siteSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("siteSecretSet")
    public Boolean siteSecretSet;
    public GoogleFirebaseAppcheckV1betaRecaptchaV3Config withSiteSecretSet(Boolean siteSecretSet) {
        this.siteSecretSet = siteSecretSet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tokenTtl")
    public String tokenTtl;
    public GoogleFirebaseAppcheckV1betaRecaptchaV3Config withTokenTtl(String tokenTtl) {
        this.tokenTtl = tokenTtl;
        return this;
    }
}