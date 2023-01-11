package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo
 * Phone Verification info for a StartMfa response.
**/
public class GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionInfo")
    public String sessionInfo;
    public GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo withSessionInfo(String sessionInfo) {
        this.sessionInfo = sessionInfo;
        return this;
    }
}