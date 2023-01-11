package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitiationRecipientCreateRequest
 * PaymentInitiationRecipientCreateRequest defines the request schema for `/payment_initiation/recipient/create`
**/
public class PaymentInitiationRecipientCreateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public java.util.Map<String, Object> address;
    public PaymentInitiationRecipientCreateRequest withAddress(java.util.Map<String, Object> address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bacs")
    public java.util.Map<String, Object> bacs;
    public PaymentInitiationRecipientCreateRequest withBacs(java.util.Map<String, Object> bacs) {
        this.bacs = bacs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public PaymentInitiationRecipientCreateRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public PaymentInitiationRecipientCreateRequest withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PaymentInitiationRecipientCreateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public PaymentInitiationRecipientCreateRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}