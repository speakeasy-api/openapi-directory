package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentInitiationPaymentListRequest
 * PaymentInitiationPaymentListRequest defines the request schema for `/payment_initiation/payment/list`
**/
public class PaymentInitiationPaymentListRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("client_id")
    public String clientId;
    public PaymentInitiationPaymentListRequest withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public PaymentInitiationPaymentListRequest withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cursor")
    public String cursor;
    public PaymentInitiationPaymentListRequest withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public PaymentInitiationPaymentListRequest withSecret(String secret) {
        this.secret = secret;
        return this;
    }
}