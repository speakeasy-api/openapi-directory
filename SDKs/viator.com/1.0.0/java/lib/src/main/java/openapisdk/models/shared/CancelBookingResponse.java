package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancelBookingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingId")
    public String bookingId;
    public CancelBookingResponse withBookingId(String bookingId) {
        this.bookingId = bookingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public CancelBookingResponseReasonEnum reason;
    public CancelBookingResponse withReason(CancelBookingResponseReasonEnum reason) {
        this.reason = reason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CancelBookingResponseStatusEnum status;
    public CancelBookingResponse withStatus(CancelBookingResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}