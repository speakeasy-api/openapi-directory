package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OpenAqCitiesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public OpenAqCitiesResultMeta meta;
    public OpenAqCitiesResult withMeta(OpenAqCitiesResultMeta meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("results")
    public CitiesRow[] results;
    public OpenAqCitiesResult withResults(CitiesRow[] results) {
        this.results = results;
        return this;
    }
}