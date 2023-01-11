package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Serp200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public Serp200ApplicationJson withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("query")
    public String query;
    public Serp200ApplicationJson withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("searched_results")
    public Long searchedResults;
    public Serp200ApplicationJson withSearchedResults(Long searchedResults) {
        this.searchedResults = searchedResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public Serp200ApplicationJson withWebsite(String website) {
        this.website = website;
        return this;
    }
}