package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2StartMfaSignInResponse
 * StartMfaSignIn response.
**/
public class GoogleCloudIdentitytoolkitV2StartMfaSignInResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phoneResponseInfo")
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo phoneResponseInfo;
    public GoogleCloudIdentitytoolkitV2StartMfaSignInResponse withPhoneResponseInfo(GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo phoneResponseInfo) {
        this.phoneResponseInfo = phoneResponseInfo;
        return this;
    }
}