package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SupportedCurrencyResponseV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencies")
    public SupportedCurrencyV2[] currencies;
    public SupportedCurrencyResponseV2 withCurrencies(SupportedCurrencyV2[] currencies) {
        this.currencies = currencies;
        return this;
    }
}