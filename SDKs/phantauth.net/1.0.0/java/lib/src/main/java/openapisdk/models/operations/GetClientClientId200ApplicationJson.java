package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetClientClientId200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("@id")
    public String atId;
    public GetClientClientId200ApplicationJson withAtId(String atId) {
        this.atId = atId;
        return this;
    }
    @JsonProperty("client_id")
    public String clientId;
    public GetClientClientId200ApplicationJson withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_name")
    public String clientName;
    public GetClientClientId200ApplicationJson withClientName(String clientName) {
        this.clientName = clientName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_secret")
    public String clientSecret;
    public GetClientClientId200ApplicationJson withClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_uri")
    public String clientUri;
    public GetClientClientId200ApplicationJson withClientUri(String clientUri) {
        this.clientUri = clientUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contacts")
    public Object[] contacts;
    public GetClientClientId200ApplicationJson withContacts(Object[] contacts) {
        this.contacts = contacts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("grant_types")
    public Object[] grantTypes;
    public GetClientClientId200ApplicationJson withGrantTypes(Object[] grantTypes) {
        this.grantTypes = grantTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwks")
    public Object[] jwks;
    public GetClientClientId200ApplicationJson withJwks(Object[] jwks) {
        this.jwks = jwks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jwks_uri")
    public String jwksUri;
    public GetClientClientId200ApplicationJson withJwksUri(String jwksUri) {
        this.jwksUri = jwksUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo_email")
    public String logoEmail;
    public GetClientClientId200ApplicationJson withLogoEmail(String logoEmail) {
        this.logoEmail = logoEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo_uri")
    public String logoUri;
    public GetClientClientId200ApplicationJson withLogoUri(String logoUri) {
        this.logoUri = logoUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("policy_uri")
    public String policyUri;
    public GetClientClientId200ApplicationJson withPolicyUri(String policyUri) {
        this.policyUri = policyUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_uris")
    public Object[] redirectUris;
    public GetClientClientId200ApplicationJson withRedirectUris(Object[] redirectUris) {
        this.redirectUris = redirectUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("response_types")
    public Object[] responseTypes;
    public GetClientClientId200ApplicationJson withResponseTypes(Object[] responseTypes) {
        this.responseTypes = responseTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scope")
    public String scope;
    public GetClientClientId200ApplicationJson withScope(String scope) {
        this.scope = scope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("software_id")
    public String softwareId;
    public GetClientClientId200ApplicationJson withSoftwareId(String softwareId) {
        this.softwareId = softwareId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("software_version")
    public String softwareVersion;
    public GetClientClientId200ApplicationJson withSoftwareVersion(String softwareVersion) {
        this.softwareVersion = softwareVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token_endpoint_auth_method")
    public String tokenEndpointAuthMethod;
    public GetClientClientId200ApplicationJson withTokenEndpointAuthMethod(String tokenEndpointAuthMethod) {
        this.tokenEndpointAuthMethod = tokenEndpointAuthMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tos_uri")
    public String tosUri;
    public GetClientClientId200ApplicationJson withTosUri(String tosUri) {
        this.tosUri = tosUri;
        return this;
    }
}