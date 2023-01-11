package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig
 * Configurations options for authenticating with a the standard set of Identity Toolkit-trusted IDPs.
**/
public class GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appleSignInConfig")
    public GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig appleSignInConfig;
    public GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig withAppleSignInConfig(GoogleCloudIdentitytoolkitAdminV2AppleSignInConfig appleSignInConfig) {
        this.appleSignInConfig = appleSignInConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecret")
    public String clientSecret;
    public GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudIdentitytoolkitAdminV2DefaultSupportedIdpConfig withName(String name) {
        this.name = name;
        return this;
    }
}