package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FourHundredAndSixNotAcceptable {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public FourHundredAndSixNotAcceptableCodeEnum code;
    public FourHundredAndSixNotAcceptable withCode(FourHundredAndSixNotAcceptableCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public FourHundredAndSixNotAcceptable withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public FourHundredAndSixNotAcceptable withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public FourHundredAndSixNotAcceptable withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}