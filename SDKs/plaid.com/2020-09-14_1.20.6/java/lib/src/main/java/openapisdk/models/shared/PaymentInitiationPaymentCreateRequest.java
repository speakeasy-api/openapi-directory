package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitiationPaymentCreateRequest
 * PaymentInitiationPaymentCreateRequest defines the request schema for `/payment_initiation/payment/create`
**/
public class PaymentInitiationPaymentCreateRequest {
    @JsonProperty("amount")
    public java.util.Map<String, Object> amount;
    public PaymentInitiationPaymentCreateRequest withAmount(java.util.Map<String, Object> amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public PaymentInitiationPaymentCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public java.util.Map<String, Object> options;
    public PaymentInitiationPaymentCreateRequest withOptions(java.util.Map<String, Object> options) {
        this.options = options;
        return this;
    }
    @JsonProperty("recipient_id")
    public String recipientId;
    public PaymentInitiationPaymentCreateRequest withRecipientId(String recipientId) {
        this.recipientId = recipientId;
        return this;
    }
    @JsonProperty("reference")
    public String reference;
    public PaymentInitiationPaymentCreateRequest withReference(String reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public java.util.Map<String, Object> schedule;
    public PaymentInitiationPaymentCreateRequest withSchedule(java.util.Map<String, Object> schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public PaymentInitiationPaymentCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}