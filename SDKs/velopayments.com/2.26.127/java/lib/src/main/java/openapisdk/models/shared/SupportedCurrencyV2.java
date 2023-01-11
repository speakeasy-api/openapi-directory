package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SupportedCurrencyV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public SupportedCurrencyV2 withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxPaymentAmount")
    public Long maxPaymentAmount;
    public SupportedCurrencyV2 withMaxPaymentAmount(Long maxPaymentAmount) {
        this.maxPaymentAmount = maxPaymentAmount;
        return this;
    }
}