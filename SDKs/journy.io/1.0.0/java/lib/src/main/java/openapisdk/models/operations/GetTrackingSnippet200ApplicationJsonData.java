package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetTrackingSnippet200ApplicationJsonData
 * A snippet
**/
public class GetTrackingSnippet200ApplicationJsonData {
    @JsonProperty("domain")
    public String domain;
    public GetTrackingSnippet200ApplicationJsonData withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("snippet")
    public String snippet;
    public GetTrackingSnippet200ApplicationJsonData withSnippet(String snippet) {
        this.snippet = snippet;
        return this;
    }
}