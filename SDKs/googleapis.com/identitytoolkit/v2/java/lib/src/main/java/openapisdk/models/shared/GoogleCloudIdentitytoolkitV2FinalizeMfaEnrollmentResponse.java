package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse
 * FinalizeMfaEnrollment response.
**/
public class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idToken")
    public String idToken;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse withIdToken(String idToken) {
        this.idToken = idToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneAuthInfo")
    public GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo phoneAuthInfo;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse withPhoneAuthInfo(GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo phoneAuthInfo) {
        this.phoneAuthInfo = phoneAuthInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refreshToken")
    public String refreshToken;
    public GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse withRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
        return this;
    }
}