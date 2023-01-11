package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2StartMfaSignInRequest
 * Starts multi-factor sign-in by sending the multi-factor auth challenge.
**/
public class GoogleCloudIdentitytoolkitV2StartMfaSignInRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaEnrollmentId")
    public String mfaEnrollmentId;
    public GoogleCloudIdentitytoolkitV2StartMfaSignInRequest withMfaEnrollmentId(String mfaEnrollmentId) {
        this.mfaEnrollmentId = mfaEnrollmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaPendingCredential")
    public String mfaPendingCredential;
    public GoogleCloudIdentitytoolkitV2StartMfaSignInRequest withMfaPendingCredential(String mfaPendingCredential) {
        this.mfaPendingCredential = mfaPendingCredential;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneSignInInfo")
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo phoneSignInInfo;
    public GoogleCloudIdentitytoolkitV2StartMfaSignInRequest withPhoneSignInInfo(GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo phoneSignInInfo) {
        this.phoneSignInInfo = phoneSignInInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public GoogleCloudIdentitytoolkitV2StartMfaSignInRequest withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
}