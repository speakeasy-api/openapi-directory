package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Price {
    @JsonProperty("amount")
    public Long amount;
    public Price withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currencyId")
    public PriceCurrencyIdEnum currencyId;
    public Price withCurrencyId(PriceCurrencyIdEnum currencyId) {
        this.currencyId = currencyId;
        return this;
    }
}