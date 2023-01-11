package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest
 * Finalizes sign-in by verifying MFA challenge.
**/
public class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaPendingCredential")
    public String mfaPendingCredential;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest withMfaPendingCredential(String mfaPendingCredential) {
        this.mfaPendingCredential = mfaPendingCredential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneVerificationInfo")
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo phoneVerificationInfo;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest withPhoneVerificationInfo(GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo phoneVerificationInfo) {
        this.phoneVerificationInfo = phoneVerificationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
}