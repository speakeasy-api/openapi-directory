package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo
 * Phone Verification info for a FinalizeMfa request.
**/
public class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidVerificationProof")
    public String androidVerificationProof;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo withAndroidVerificationProof(String androidVerificationProof) {
        this.androidVerificationProof = androidVerificationProof;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionInfo")
    public String sessionInfo;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo withSessionInfo(String sessionInfo) {
        this.sessionInfo = sessionInfo;
        return this;
    }
}