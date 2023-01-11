package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ObWritePaymentDetailsResponse1Data {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaymentStatus")
    public ObWritePaymentDetailsResponse1DataPaymentStatus[] paymentStatus;
    public ObWritePaymentDetailsResponse1Data withPaymentStatus(ObWritePaymentDetailsResponse1DataPaymentStatus[] paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
}