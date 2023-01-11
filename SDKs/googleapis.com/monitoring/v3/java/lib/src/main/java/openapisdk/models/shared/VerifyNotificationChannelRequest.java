package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VerifyNotificationChannelRequest
 * The VerifyNotificationChannel request.
**/
public class VerifyNotificationChannelRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public VerifyNotificationChannelRequest withCode(String code) {
        this.code = code;
        return this;
    }
}