package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyGetAccountInfoRequest
 * Request to get the account information.
**/
public class IdentitytoolkitRelyingpartyGetAccountInfoRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("delegatedProjectNumber")
    public String delegatedProjectNumber;
    public IdentitytoolkitRelyingpartyGetAccountInfoRequest withDelegatedProjectNumber(String delegatedProjectNumber) {
        this.delegatedProjectNumber = delegatedProjectNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String[] email;
    public IdentitytoolkitRelyingpartyGetAccountInfoRequest withEmail(String[] email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public IdentitytoolkitRelyingpartyGetAccountInfoRequest withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localId")
    public String[] localId;
    public IdentitytoolkitRelyingpartyGetAccountInfoRequest withLocalId(String[] localId) {
        this.localId = localId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String[] phoneNumber;
    public IdentitytoolkitRelyingpartyGetAccountInfoRequest withPhoneNumber(String[] phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}