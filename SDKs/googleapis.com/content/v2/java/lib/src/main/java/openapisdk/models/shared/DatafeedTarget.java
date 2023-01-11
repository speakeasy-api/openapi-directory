package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DatafeedTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public DatafeedTarget withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("excludedDestinations")
    public String[] excludedDestinations;
    public DatafeedTarget withExcludedDestinations(String[] excludedDestinations) {
        this.excludedDestinations = excludedDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includedDestinations")
    public String[] includedDestinations;
    public DatafeedTarget withIncludedDestinations(String[] includedDestinations) {
        this.includedDestinations = includedDestinations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("language")
    public String language;
    public DatafeedTarget withLanguage(String language) {
        this.language = language;
        return this;
    }
}