package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo
 * Phone Verification info for a FinalizeMfa response.
**/
public class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidVerificationProof")
    public String androidVerificationProof;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo withAndroidVerificationProof(String androidVerificationProof) {
        this.androidVerificationProof = androidVerificationProof;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("androidVerificationProofExpireTime")
    public String androidVerificationProofExpireTime;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo withAndroidVerificationProofExpireTime(String androidVerificationProofExpireTime) {
        this.androidVerificationProofExpireTime = androidVerificationProofExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneNumber")
    public String phoneNumber;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}