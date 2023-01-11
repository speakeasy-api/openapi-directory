package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CollectOnDelivery
 * Defer payment until package is delivered, instead of when it is ordered.
**/
public class CollectOnDelivery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_amount")
    public PaymentAmount paymentAmount;
    public CollectOnDelivery withPaymentAmount(PaymentAmount paymentAmount) {
        this.paymentAmount = paymentAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_type")
    public CollectOnDeliveryPaymentTypeEnum paymentType;
    public CollectOnDelivery withPaymentType(CollectOnDeliveryPaymentTypeEnum paymentType) {
        this.paymentType = paymentType;
        return this;
    }
}