package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public BillingAddress billing;
    public PaymentInfo withBilling(BillingAddress billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card")
    public CreditCard card;
    public PaymentInfo withCard(CreditCard card) {
        this.card = card;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("corporate")
    public PaymentInfoCorporate corporate;
    public PaymentInfo withCorporate(PaymentInfoCorporate corporate) {
        this.corporate = corporate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_card")
    public CreditCard sharedCard;
    public PaymentInfo withSharedCard(CreditCard sharedCard) {
        this.sharedCard = sharedCard;
        return this;
    }
}