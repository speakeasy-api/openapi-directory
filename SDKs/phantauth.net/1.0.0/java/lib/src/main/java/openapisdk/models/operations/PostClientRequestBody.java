package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostClientRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@id")
    public String atId;
    public PostClientRequestBody withAtId(String atId) {
        this.atId = atId;
        return this;
    }
    @JsonProperty("client_id")
    public String clientId;
    public PostClientRequestBody withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_name")
    public String clientName;
    public PostClientRequestBody withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_secret")
    public String clientSecret;
    public PostClientRequestBody withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_uri")
    public String clientUri;
    public PostClientRequestBody withClientUri(String clientUri) {
        this.clientUri = clientUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public Object[] contacts;
    public PostClientRequestBody withContacts(Object[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grant_types")
    public Object[] grantTypes;
    public PostClientRequestBody withGrantTypes(Object[] grantTypes) {
        this.grantTypes = grantTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwks")
    public Object[] jwks;
    public PostClientRequestBody withJwks(Object[] jwks) {
        this.jwks = jwks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwks_uri")
    public String jwksUri;
    public PostClientRequestBody withJwksUri(String jwksUri) {
        this.jwksUri = jwksUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo_email")
    public String logoEmail;
    public PostClientRequestBody withLogoEmail(String logoEmail) {
        this.logoEmail = logoEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo_uri")
    public String logoUri;
    public PostClientRequestBody withLogoUri(String logoUri) {
        this.logoUri = logoUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy_uri")
    public String policyUri;
    public PostClientRequestBody withPolicyUri(String policyUri) {
        this.policyUri = policyUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_uris")
    public Object[] redirectUris;
    public PostClientRequestBody withRedirectUris(Object[] redirectUris) {
        this.redirectUris = redirectUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_types")
    public Object[] responseTypes;
    public PostClientRequestBody withResponseTypes(Object[] responseTypes) {
        this.responseTypes = responseTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public PostClientRequestBody withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("software_id")
    public String softwareId;
    public PostClientRequestBody withSoftwareId(String softwareId) {
        this.softwareId = softwareId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("software_version")
    public String softwareVersion;
    public PostClientRequestBody withSoftwareVersion(String softwareVersion) {
        this.softwareVersion = softwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_endpoint_auth_method")
    public String tokenEndpointAuthMethod;
    public PostClientRequestBody withTokenEndpointAuthMethod(String tokenEndpointAuthMethod) {
        this.tokenEndpointAuthMethod = tokenEndpointAuthMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tos_uri")
    public String tosUri;
    public PostClientRequestBody withTosUri(String tosUri) {
        this.tosUri = tosUri;
        return this;
    }
}