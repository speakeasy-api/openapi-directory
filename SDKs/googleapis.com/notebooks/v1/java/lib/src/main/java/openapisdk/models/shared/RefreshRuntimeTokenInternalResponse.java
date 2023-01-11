package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RefreshRuntimeTokenInternalResponse
 * Response with a new access token.
**/
public class RefreshRuntimeTokenInternalResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessToken")
    public String accessToken;
    public RefreshRuntimeTokenInternalResponse withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public RefreshRuntimeTokenInternalResponse withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
}