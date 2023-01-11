package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RefundDetails
 * Details of the refund
 * 
 * **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
 * 
**/
public class RefundDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public RefundDetails withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("itemPrice")
    public Double itemPrice;
    public RefundDetails withItemPrice(Double itemPrice) {
        this.itemPrice = itemPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundAmount")
    public Double refundAmount;
    public RefundDetails withRefundAmount(Double refundAmount) {
        this.refundAmount = refundAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refundPercentage")
    public Double refundPercentage;
    public RefundDetails withRefundPercentage(Double refundPercentage) {
        this.refundPercentage = refundPercentage;
        return this;
    }
}