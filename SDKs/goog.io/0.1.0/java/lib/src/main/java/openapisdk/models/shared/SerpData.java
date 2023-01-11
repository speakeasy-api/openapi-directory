package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SerpData {
    @JsonProperty("query")
    public String query;
    public SerpData withQuery(String query) {
        this.query = query;
        return this;
    }
    @JsonProperty("website")
    public String website;
    public SerpData withWebsite(String website) {
        this.website = website;
        return this;
    }
}