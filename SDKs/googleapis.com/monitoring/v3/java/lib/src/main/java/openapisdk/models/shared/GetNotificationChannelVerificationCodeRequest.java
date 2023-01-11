package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetNotificationChannelVerificationCodeRequest
 * The GetNotificationChannelVerificationCode request.
**/
public class GetNotificationChannelVerificationCodeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expireTime")
    public String expireTime;
    public GetNotificationChannelVerificationCodeRequest withExpireTime(String expireTime) {
        this.expireTime = expireTime;
        return this;
    }
}