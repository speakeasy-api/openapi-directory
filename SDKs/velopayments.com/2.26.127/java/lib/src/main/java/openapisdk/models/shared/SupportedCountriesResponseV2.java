package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SupportedCountriesResponseV2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public SupportedCountryV2[] countries;
    public SupportedCountriesResponseV2 withCountries(SupportedCountryV2[] countries) {
        this.countries = countries;
        return this;
    }
}