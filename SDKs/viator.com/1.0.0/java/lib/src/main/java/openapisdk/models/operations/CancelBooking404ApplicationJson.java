package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancelBooking404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public CancelBooking404ApplicationJsonCodeEnum code;
    public CancelBooking404ApplicationJson withCode(CancelBooking404ApplicationJsonCodeEnum code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public CancelBooking404ApplicationJsonMessageEnum message;
    public CancelBooking404ApplicationJson withMessage(CancelBooking404ApplicationJsonMessageEnum message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public String timestamp;
    public CancelBooking404ApplicationJson withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trackingId")
    public String trackingId;
    public CancelBooking404ApplicationJson withTrackingId(String trackingId) {
        this.trackingId = trackingId;
        return this;
    }
}