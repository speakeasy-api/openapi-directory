package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CountryTargeting
 * Country targeting specification.
**/
public class CountryTargeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countries")
    public String[] countries;
    public CountryTargeting withCountries(String[] countries) {
        this.countries = countries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeRestOfWorld")
    public Boolean includeRestOfWorld;
    public CountryTargeting withIncludeRestOfWorld(Boolean includeRestOfWorld) {
        this.includeRestOfWorld = includeRestOfWorld;
        return this;
    }
}