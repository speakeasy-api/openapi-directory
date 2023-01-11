package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitiationRecipientListRequest
 * PaymentInitiationRecipientListRequest defines the request schema for `/payment_initiation/recipient/list`
**/
public class PaymentInitiationRecipientListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public PaymentInitiationRecipientListRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public PaymentInitiationRecipientListRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}