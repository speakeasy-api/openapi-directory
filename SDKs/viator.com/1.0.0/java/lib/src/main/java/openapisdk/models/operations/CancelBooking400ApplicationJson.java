package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancelBooking400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public CancelBooking400ApplicationJsonCodeEnum code;
    public CancelBooking400ApplicationJson withCode(CancelBooking400ApplicationJsonCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public CancelBooking400ApplicationJsonMessageEnum message;
    public CancelBooking400ApplicationJson withMessage(CancelBooking400ApplicationJsonMessageEnum message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public CancelBooking400ApplicationJson withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public CancelBooking400ApplicationJson withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}