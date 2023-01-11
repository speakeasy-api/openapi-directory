package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitiationPaymentTokenCreateRequest
 * PaymentInitiationPaymentTokenCreateRequest defines the request schema for `/payment_initiation/payment/token/create`
**/
public class PaymentInitiationPaymentTokenCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public PaymentInitiationPaymentTokenCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("payment_id")
    public String paymentId;
    public PaymentInitiationPaymentTokenCreateRequest withPaymentId(String paymentId) {
        this.paymentId = paymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public PaymentInitiationPaymentTokenCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}