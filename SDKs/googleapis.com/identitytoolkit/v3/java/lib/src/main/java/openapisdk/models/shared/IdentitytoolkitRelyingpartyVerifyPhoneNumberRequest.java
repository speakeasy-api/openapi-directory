package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest
 * Request for Identitytoolkit-VerifyPhoneNumber
**/
public class IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public String operation;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionInfo")
    public String sessionInfo;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withSessionInfo(String sessionInfo) {
        this.sessionInfo = sessionInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("temporaryProof")
    public String temporaryProof;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withTemporaryProof(String temporaryProof) {
        this.temporaryProof = temporaryProof;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationProof")
    public String verificationProof;
    public IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest withVerificationProof(String verificationProof) {
        this.verificationProof = verificationProof;
        return this;
    }
}