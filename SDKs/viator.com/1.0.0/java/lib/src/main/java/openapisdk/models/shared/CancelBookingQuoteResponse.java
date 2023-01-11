package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CancelBookingQuoteResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bookingId")
    public String bookingId;
    public CancelBookingQuoteResponse withBookingId(String bookingId) {
        this.bookingId = bookingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundDetails")
    public RefundDetails refundDetails;
    public CancelBookingQuoteResponse withRefundDetails(RefundDetails refundDetails) {
        this.refundDetails = refundDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CancelBookingQuoteResponseStatusEnum status;
    public CancelBookingQuoteResponse withStatus(CancelBookingQuoteResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}