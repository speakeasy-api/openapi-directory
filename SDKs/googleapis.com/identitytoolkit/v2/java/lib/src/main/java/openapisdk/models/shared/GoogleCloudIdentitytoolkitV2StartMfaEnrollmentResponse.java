package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse
 * StartMfaEnrollment response.
**/
public class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneSessionInfo")
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo phoneSessionInfo;
    public GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse withPhoneSessionInfo(GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo phoneSessionInfo) {
        this.phoneSessionInfo = phoneSessionInfo;
        return this;
    }
}