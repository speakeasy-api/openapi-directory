package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectInSearchPriceWithoutDiscount {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Float amount;
    public ProjectInSearchPriceWithoutDiscount withAmount(Float amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public ProjectInSearchPriceWithoutDiscount withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usd_amount")
    public Float usdAmount;
    public ProjectInSearchPriceWithoutDiscount withUsdAmount(Float usdAmount) {
        this.usdAmount = usdAmount;
        return this;
    }
}