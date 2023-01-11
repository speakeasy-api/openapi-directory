package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyVerifyCustomTokenRequest
 * Request to verify a custom token
**/
public class IdentitytoolkitRelyingpartyVerifyCustomTokenRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegatedProjectNumber")
    public String delegatedProjectNumber;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenRequest withDelegatedProjectNumber(String delegatedProjectNumber) {
        this.delegatedProjectNumber = delegatedProjectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceId")
    public String instanceId;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("returnSecureToken")
    public Boolean returnSecureToken;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenRequest withReturnSecureToken(Boolean returnSecureToken) {
        this.returnSecureToken = returnSecureToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public IdentitytoolkitRelyingpartyVerifyCustomTokenRequest withToken(String token) {
        this.token = token;
        return this;
    }
}