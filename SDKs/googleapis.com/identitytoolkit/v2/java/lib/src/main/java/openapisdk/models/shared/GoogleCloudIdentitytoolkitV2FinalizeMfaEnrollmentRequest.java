package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest
 * Finishes enrolling a second factor for the user.
**/
public class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneVerificationInfo")
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo phoneVerificationInfo;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest withPhoneVerificationInfo(GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo phoneVerificationInfo) {
        this.phoneVerificationInfo = phoneVerificationInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
}