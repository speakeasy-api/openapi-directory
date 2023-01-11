package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenAqCountriesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public OpenAqCountriesResultMeta meta;
    public OpenAqCountriesResult withMeta(OpenAqCountriesResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("results")
    public CountriesRow[] results;
    public OpenAqCountriesResult withResults(CountriesRow[] results) {
        this.results = results;
        return this;
    }
}