package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListGlossaryEntriesResponse
 * Response message for ListGlossaryEntries
**/
public class ListGlossaryEntriesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("glossaryEntries")
    public GlossaryEntry[] glossaryEntries;
    public ListGlossaryEntriesResponse withGlossaryEntries(GlossaryEntry[] glossaryEntries) {
        this.glossaryEntries = glossaryEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListGlossaryEntriesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}