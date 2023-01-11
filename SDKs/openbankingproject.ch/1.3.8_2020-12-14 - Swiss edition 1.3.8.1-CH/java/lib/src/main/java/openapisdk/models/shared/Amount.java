package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Amount {
    @JsonProperty("amount")
    public String amount;
    public Amount withAmount(String amount) {
        this.amount = amount;
        return this;
    }
    @JsonProperty("currency")
    public String currency;
    public Amount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}