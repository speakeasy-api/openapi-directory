package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyVerifyAssertionRequest
 * Request to verify the IDP assertion.
**/
public class IdentitytoolkitRelyingpartyVerifyAssertionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoCreate")
    public Boolean autoCreate;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withAutoCreate(Boolean autoCreate) {
        this.autoCreate = autoCreate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegatedProjectNumber")
    public String delegatedProjectNumber;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withDelegatedProjectNumber(String delegatedProjectNumber) {
        this.delegatedProjectNumber = delegatedProjectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingIdToken")
    public String pendingIdToken;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withPendingIdToken(String pendingIdToken) {
        this.pendingIdToken = pendingIdToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("postBody")
    public String postBody;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withPostBody(String postBody) {
        this.postBody = postBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestUri")
    public String requestUri;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withRequestUri(String requestUri) {
        this.requestUri = requestUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnIdpCredential")
    public Boolean returnIdpCredential;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withReturnIdpCredential(Boolean returnIdpCredential) {
        this.returnIdpCredential = returnIdpCredential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnRefreshToken")
    public Boolean returnRefreshToken;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withReturnRefreshToken(Boolean returnRefreshToken) {
        this.returnRefreshToken = returnRefreshToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnSecureToken")
    public Boolean returnSecureToken;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withReturnSecureToken(Boolean returnSecureToken) {
        this.returnSecureToken = returnSecureToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionId")
    public String sessionId;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withSessionId(String sessionId) {
        this.sessionId = sessionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantProjectNumber")
    public String tenantProjectNumber;
    public IdentitytoolkitRelyingpartyVerifyAssertionRequest withTenantProjectNumber(String tenantProjectNumber) {
        this.tenantProjectNumber = tenantProjectNumber;
        return this;
    }
}