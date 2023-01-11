package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentityServiceOidcConfigInput
 * Configuration for OIDC Auth flow.
**/
public class IdentityServiceOidcConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateAuthorityData")
    public String certificateAuthorityData;
    public IdentityServiceOidcConfigInput withCertificateAuthorityData(String certificateAuthorityData) {
        this.certificateAuthorityData = certificateAuthorityData;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public IdentityServiceOidcConfigInput withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientSecret")
    public String clientSecret;
    public IdentityServiceOidcConfigInput withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployCloudConsoleProxy")
    public Boolean deployCloudConsoleProxy;
    public IdentityServiceOidcConfigInput withDeployCloudConsoleProxy(Boolean deployCloudConsoleProxy) {
        this.deployCloudConsoleProxy = deployCloudConsoleProxy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableAccessToken")
    public Boolean enableAccessToken;
    public IdentityServiceOidcConfigInput withEnableAccessToken(Boolean enableAccessToken) {
        this.enableAccessToken = enableAccessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraParams")
    public String extraParams;
    public IdentityServiceOidcConfigInput withExtraParams(String extraParams) {
        this.extraParams = extraParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupPrefix")
    public String groupPrefix;
    public IdentityServiceOidcConfigInput withGroupPrefix(String groupPrefix) {
        this.groupPrefix = groupPrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("groupsClaim")
    public String groupsClaim;
    public IdentityServiceOidcConfigInput withGroupsClaim(String groupsClaim) {
        this.groupsClaim = groupsClaim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuerUri")
    public String issuerUri;
    public IdentityServiceOidcConfigInput withIssuerUri(String issuerUri) {
        this.issuerUri = issuerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubectlRedirectUri")
    public String kubectlRedirectUri;
    public IdentityServiceOidcConfigInput withKubectlRedirectUri(String kubectlRedirectUri) {
        this.kubectlRedirectUri = kubectlRedirectUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes")
    public String scopes;
    public IdentityServiceOidcConfigInput withScopes(String scopes) {
        this.scopes = scopes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userClaim")
    public String userClaim;
    public IdentityServiceOidcConfigInput withUserClaim(String userClaim) {
        this.userClaim = userClaim;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPrefix")
    public String userPrefix;
    public IdentityServiceOidcConfigInput withUserPrefix(String userPrefix) {
        this.userPrefix = userPrefix;
        return this;
    }
}