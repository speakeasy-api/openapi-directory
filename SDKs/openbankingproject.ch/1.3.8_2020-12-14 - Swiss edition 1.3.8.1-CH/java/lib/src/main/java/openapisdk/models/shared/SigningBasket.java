package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SigningBasket
 * JSON Body of a establish signing basket request.
 * The body shall contain at least one entry.
 * 
**/
public class SigningBasket {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consentIds")
    public String[] consentIds;
    public SigningBasket withConsentIds(String[] consentIds) {
        this.consentIds = consentIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentIds")
    public String[] paymentIds;
    public SigningBasket withPaymentIds(String[] paymentIds) {
        this.paymentIds = paymentIds;
        return this;
    }
}