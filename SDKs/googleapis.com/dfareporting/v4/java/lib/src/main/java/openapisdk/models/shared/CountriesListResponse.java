package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CountriesListResponse
 * Country List Response
**/
public class CountriesListResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public Country[] countries;
    public CountriesListResponse withCountries(Country[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public CountriesListResponse withKind(String kind) {
        this.kind = kind;
        return this;
    }
}