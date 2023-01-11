package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitiationPaymentGetRequest
 * PaymentInitiationPaymentGetRequest defines the request schema for `/payment_initiation/payment/get`
**/
public class PaymentInitiationPaymentGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public PaymentInitiationPaymentGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("payment_id")
    public String paymentId;
    public PaymentInitiationPaymentGetRequest withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public PaymentInitiationPaymentGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}