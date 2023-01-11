package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TaxRatesCreateRequest {
    @JsonProperty("taxRates")
    public TaxRate[] taxRates;
    public TaxRatesCreateRequest withTaxRates(TaxRate[] taxRates) {
        this.taxRates = taxRates;
        return this;
    }
}