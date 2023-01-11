package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitiationRecipientGetRequest
 * PaymentInitiationRecipientGetRequest defines the request schema for `/payment_initiation/recipient/get`
**/
public class PaymentInitiationRecipientGetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public PaymentInitiationRecipientGetRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonProperty("recipient_id")
    public String recipientId;
    public PaymentInitiationRecipientGetRequest withRecipientId(String recipientId) {
        this.recipientId = recipientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public PaymentInitiationRecipientGetRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}