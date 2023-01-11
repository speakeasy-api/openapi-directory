package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest
 * Sends MFA enrollment verification SMS for a user.
**/
public class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneEnrollmentInfo")
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo phoneEnrollmentInfo;
    public GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest withPhoneEnrollmentInfo(GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo phoneEnrollmentInfo) {
        this.phoneEnrollmentInfo = phoneEnrollmentInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
}