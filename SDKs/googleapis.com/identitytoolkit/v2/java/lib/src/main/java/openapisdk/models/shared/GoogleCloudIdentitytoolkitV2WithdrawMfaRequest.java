package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2WithdrawMfaRequest
 * Withdraws MFA.
**/
public class GoogleCloudIdentitytoolkitV2WithdrawMfaRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public GoogleCloudIdentitytoolkitV2WithdrawMfaRequest withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mfaEnrollmentId")
    public String mfaEnrollmentId;
    public GoogleCloudIdentitytoolkitV2WithdrawMfaRequest withMfaEnrollmentId(String mfaEnrollmentId) {
        this.mfaEnrollmentId = mfaEnrollmentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenantId")
    public String tenantId;
    public GoogleCloudIdentitytoolkitV2WithdrawMfaRequest withTenantId(String tenantId) {
        this.tenantId = tenantId;
        return this;
    }
}