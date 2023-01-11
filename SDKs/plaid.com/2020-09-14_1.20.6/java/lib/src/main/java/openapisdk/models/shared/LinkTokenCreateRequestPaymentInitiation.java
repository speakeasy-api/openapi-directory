package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LinkTokenCreateRequestPaymentInitiation
 * Specifies options for initializing Link for use with the Payment Initiation (Europe) product. This field is required if `payment_initiation` is included in the `products` array.
**/
public class LinkTokenCreateRequestPaymentInitiation {
    @JsonProperty("payment_id")
    public String paymentId;
    public LinkTokenCreateRequestPaymentInitiation withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
}