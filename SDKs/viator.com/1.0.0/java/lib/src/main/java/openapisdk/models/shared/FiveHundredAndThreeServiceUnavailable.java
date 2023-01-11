package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FiveHundredAndThreeServiceUnavailable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public FiveHundredAndThreeServiceUnavailableCodeEnum code;
    public FiveHundredAndThreeServiceUnavailable withCode(FiveHundredAndThreeServiceUnavailableCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public FiveHundredAndThreeServiceUnavailableMessageEnum message;
    public FiveHundredAndThreeServiceUnavailable withMessage(FiveHundredAndThreeServiceUnavailableMessageEnum message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public FiveHundredAndThreeServiceUnavailable withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public FiveHundredAndThreeServiceUnavailable withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}