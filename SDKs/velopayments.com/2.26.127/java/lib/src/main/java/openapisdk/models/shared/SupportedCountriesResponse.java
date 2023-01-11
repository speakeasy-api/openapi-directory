package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SupportedCountriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public SupportedCountry[] countries;
    public SupportedCountriesResponse withCountries(SupportedCountry[] countries) {
        this.countries = countries;
        return this;
    }
}