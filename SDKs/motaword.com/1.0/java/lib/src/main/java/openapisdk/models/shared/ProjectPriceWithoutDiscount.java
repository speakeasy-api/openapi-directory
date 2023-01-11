package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectPriceWithoutDiscount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Float amount;
    public ProjectPriceWithoutDiscount withAmount(Float amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public ProjectPriceWithoutDiscount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usd_amount")
    public Float usdAmount;
    public ProjectPriceWithoutDiscount withUsdAmount(Float usdAmount) {
        this.usdAmount = usdAmount;
        return this;
    }
}