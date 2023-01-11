package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FiveHundredInternalServerError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public FiveHundredInternalServerErrorCodeEnum code;
    public FiveHundredInternalServerError withCode(FiveHundredInternalServerErrorCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public FiveHundredInternalServerErrorMessageEnum message;
    public FiveHundredInternalServerError withMessage(FiveHundredInternalServerErrorMessageEnum message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public FiveHundredInternalServerError withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public FiveHundredInternalServerError withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}