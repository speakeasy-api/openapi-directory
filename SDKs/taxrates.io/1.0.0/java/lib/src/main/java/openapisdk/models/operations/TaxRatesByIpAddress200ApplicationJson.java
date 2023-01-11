package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaxRatesByIpAddress200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country_name")
    public String countryName;
    public TaxRatesByIpAddress200ApplicationJson withCountryName(String countryName) {
        this.countryName = countryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public TaxRatesByIpAddress200ApplicationJsonTaxes[] taxes;
    public TaxRatesByIpAddress200ApplicationJson withTaxes(TaxRatesByIpAddress200ApplicationJsonTaxes[] taxes) {
        this.taxes = taxes;
        return this;
    }
}