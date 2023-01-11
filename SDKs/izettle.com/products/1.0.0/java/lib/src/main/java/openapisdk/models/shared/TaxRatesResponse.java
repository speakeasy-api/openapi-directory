package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxRatesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxRates")
    public TaxRate[] taxRates;
    public TaxRatesResponse withTaxRates(TaxRate[] taxRates) {
        this.taxRates = taxRates;
        return this;
    }
}