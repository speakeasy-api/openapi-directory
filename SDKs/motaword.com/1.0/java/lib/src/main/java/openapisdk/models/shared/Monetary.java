package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Monetary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Float amount;
    public Monetary withAmount(Float amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public Monetary withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
}