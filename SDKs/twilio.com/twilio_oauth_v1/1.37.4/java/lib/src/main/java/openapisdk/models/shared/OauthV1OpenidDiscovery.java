package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OauthV1OpenidDiscovery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorization_endpoint")
    public String authorizationEndpoint;
    public OauthV1OpenidDiscovery withAuthorizationEndpoint(String authorizationEndpoint) {
        this.authorizationEndpoint = authorizationEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claims_supported")
    public String[] claimsSupported;
    public OauthV1OpenidDiscovery withClaimsSupported(String[] claimsSupported) {
        this.claimsSupported = claimsSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_authorization_endpoint")
    public String deviceAuthorizationEndpoint;
    public OauthV1OpenidDiscovery withDeviceAuthorizationEndpoint(String deviceAuthorizationEndpoint) {
        this.deviceAuthorizationEndpoint = deviceAuthorizationEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id_token_signing_alg_values_supported")
    public String[] idTokenSigningAlgValuesSupported;
    public OauthV1OpenidDiscovery withIdTokenSigningAlgValuesSupported(String[] idTokenSigningAlgValuesSupported) {
        this.idTokenSigningAlgValuesSupported = idTokenSigningAlgValuesSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;
    public OauthV1OpenidDiscovery withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwk_uri")
    public String jwkUri;
    public OauthV1OpenidDiscovery withJwkUri(String jwkUri) {
        this.jwkUri = jwkUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_type_supported")
    public String[] responseTypeSupported;
    public OauthV1OpenidDiscovery withResponseTypeSupported(String[] responseTypeSupported) {
        this.responseTypeSupported = responseTypeSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocation_endpoint")
    public String revocationEndpoint;
    public OauthV1OpenidDiscovery withRevocationEndpoint(String revocationEndpoint) {
        this.revocationEndpoint = revocationEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scopes_supported")
    public String[] scopesSupported;
    public OauthV1OpenidDiscovery withScopesSupported(String[] scopesSupported) {
        this.scopesSupported = scopesSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject_type_supported")
    public String[] subjectTypeSupported;
    public OauthV1OpenidDiscovery withSubjectTypeSupported(String[] subjectTypeSupported) {
        this.subjectTypeSupported = subjectTypeSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_endpoint")
    public String tokenEndpoint;
    public OauthV1OpenidDiscovery withTokenEndpoint(String tokenEndpoint) {
        this.tokenEndpoint = tokenEndpoint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public OauthV1OpenidDiscovery withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userinfo_endpoint")
    public String userinfoEndpoint;
    public OauthV1OpenidDiscovery withUserinfoEndpoint(String userinfoEndpoint) {
        this.userinfoEndpoint = userinfoEndpoint;
        return this;
    }
}