package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IdentitytoolkitRelyingpartySendVerificationCodeResponse
 * Response for Identitytoolkit-SendVerificationCode
**/
public class IdentitytoolkitRelyingpartySendVerificationCodeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sessionInfo")
    public String sessionInfo;
    public IdentitytoolkitRelyingpartySendVerificationCodeResponse withSessionInfo(String sessionInfo) {
        this.sessionInfo = sessionInfo;
        return this;
    }
}