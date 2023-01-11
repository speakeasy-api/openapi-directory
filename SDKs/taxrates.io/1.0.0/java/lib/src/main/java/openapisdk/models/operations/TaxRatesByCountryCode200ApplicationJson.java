package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxRatesByCountryCode200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public TaxRatesByCountryCode200ApplicationJson withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public TaxRatesByCountryCode200ApplicationJsonTaxes[] taxes;
    public TaxRatesByCountryCode200ApplicationJson withTaxes(TaxRatesByCountryCode200ApplicationJsonTaxes[] taxes) {
        this.taxes = taxes;
        return this;
    }
}