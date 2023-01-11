package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceOidcConfig
 * Configuration for OIDC Auth flow.
**/
public class IdentityServiceOidcConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthorityData")
    public String certificateAuthorityData;
    public IdentityServiceOidcConfig withCertificateAuthorityData(String certificateAuthorityData) {
        this.certificateAuthorityData = certificateAuthorityData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public IdentityServiceOidcConfig withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecret")
    public String clientSecret;
    public IdentityServiceOidcConfig withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployCloudConsoleProxy")
    public Boolean deployCloudConsoleProxy;
    public IdentityServiceOidcConfig withDeployCloudConsoleProxy(Boolean deployCloudConsoleProxy) {
        this.deployCloudConsoleProxy = deployCloudConsoleProxy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAccessToken")
    public Boolean enableAccessToken;
    public IdentityServiceOidcConfig withEnableAccessToken(Boolean enableAccessToken) {
        this.enableAccessToken = enableAccessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptedClientSecret")
    public String encryptedClientSecret;
    public IdentityServiceOidcConfig withEncryptedClientSecret(String encryptedClientSecret) {
        this.encryptedClientSecret = encryptedClientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraParams")
    public String extraParams;
    public IdentityServiceOidcConfig withExtraParams(String extraParams) {
        this.extraParams = extraParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPrefix")
    public String groupPrefix;
    public IdentityServiceOidcConfig withGroupPrefix(String groupPrefix) {
        this.groupPrefix = groupPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupsClaim")
    public String groupsClaim;
    public IdentityServiceOidcConfig withGroupsClaim(String groupsClaim) {
        this.groupsClaim = groupsClaim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuerUri")
    public String issuerUri;
    public IdentityServiceOidcConfig withIssuerUri(String issuerUri) {
        this.issuerUri = issuerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubectlRedirectUri")
    public String kubectlRedirectUri;
    public IdentityServiceOidcConfig withKubectlRedirectUri(String kubectlRedirectUri) {
        this.kubectlRedirectUri = kubectlRedirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String scopes;
    public IdentityServiceOidcConfig withScopes(String scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userClaim")
    public String userClaim;
    public IdentityServiceOidcConfig withUserClaim(String userClaim) {
        this.userClaim = userClaim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPrefix")
    public String userPrefix;
    public IdentityServiceOidcConfig withUserPrefix(String userPrefix) {
        this.userPrefix = userPrefix;
        return this;
    }
}