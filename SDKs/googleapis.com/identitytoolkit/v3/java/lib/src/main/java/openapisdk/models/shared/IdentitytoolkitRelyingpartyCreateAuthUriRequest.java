package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyCreateAuthUriRequest
 * Request to get the IDP authentication URL.
**/
public class IdentitytoolkitRelyingpartyCreateAuthUriRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authFlowType")
    public String authFlowType;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withAuthFlowType(String authFlowType) {
        this.authFlowType = authFlowType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientId")
    public String clientId;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context")
    public String context;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withContext(String context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continueUri")
    public String continueUri;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withContinueUri(String continueUri) {
        this.continueUri = continueUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customParameter")
    public java.util.Map<String, String> customParameter;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withCustomParameter(java.util.Map<String, String> customParameter) {
        this.customParameter = customParameter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostedDomain")
    public String hostedDomain;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withHostedDomain(String hostedDomain) {
        this.hostedDomain = hostedDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identifier")
    public String identifier;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withIdentifier(String identifier) {
        this.identifier = identifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthConsumerKey")
    public String oauthConsumerKey;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withOauthConsumerKey(String oauthConsumerKey) {
        this.oauthConsumerKey = oauthConsumerKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauthScope")
    public String oauthScope;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withOauthScope(String oauthScope) {
        this.oauthScope = oauthScope;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openidRealm")
    public String openidRealm;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withOpenidRealm(String openidRealm) {
        this.openidRealm = openidRealm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaApp")
    public String otaApp;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withOtaApp(String otaApp) {
        this.otaApp = otaApp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerId")
    public String providerId;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withProviderId(String providerId) {
        this.providerId = providerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantProjectNumber")
    public String tenantProjectNumber;
    public IdentitytoolkitRelyingpartyCreateAuthUriRequest withTenantProjectNumber(String tenantProjectNumber) {
        this.tenantProjectNumber = tenantProjectNumber;
        return this;
    }
}