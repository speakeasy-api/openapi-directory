package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FourHundredAndOneUnauthorized {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public FourHundredAndOneUnauthorizedCodeEnum code;
    public FourHundredAndOneUnauthorized withCode(FourHundredAndOneUnauthorizedCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public FourHundredAndOneUnauthorizedMessageEnum message;
    public FourHundredAndOneUnauthorized withMessage(FourHundredAndOneUnauthorizedMessageEnum message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public FourHundredAndOneUnauthorized withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public FourHundredAndOneUnauthorized withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}