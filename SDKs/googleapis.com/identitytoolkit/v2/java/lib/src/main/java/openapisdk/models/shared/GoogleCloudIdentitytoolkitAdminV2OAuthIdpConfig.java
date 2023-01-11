package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig
 * Configuration options for authenticating with an OAuth IDP.
**/
public class GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecret")
    public String clientSecret;
    public GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseType")
    public GoogleCloudIdentitytoolkitAdminV2OAuthResponseType responseType;
    public GoogleCloudIdentitytoolkitAdminV2OAuthIdpConfig withResponseType(GoogleCloudIdentitytoolkitAdminV2OAuthResponseType responseType) {
        this.responseType = responseType;
        return this;
    }
}