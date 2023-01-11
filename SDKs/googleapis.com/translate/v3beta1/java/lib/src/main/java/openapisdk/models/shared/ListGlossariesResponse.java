package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGlossariesResponse
 * Response message for ListGlossaries.
**/
public class ListGlossariesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaries")
    public Glossary[] glossaries;
    public ListGlossariesResponse withGlossaries(Glossary[] glossaries) {
        this.glossaries = glossaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGlossariesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}