package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetNotificationChannelVerificationCodeResponse
 * The GetNotificationChannelVerificationCode request.
**/
public class GetNotificationChannelVerificationCodeResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public GetNotificationChannelVerificationCodeResponse withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GetNotificationChannelVerificationCodeResponse withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
}