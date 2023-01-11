package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagBindingsResponse
 * The ListTagBindings response.
**/
public class ListTagBindingsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTagBindingsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagBindings")
    public TagBinding[] tagBindings;
    public ListTagBindingsResponse withTagBindings(TagBinding[] tagBindings) {
        this.tagBindings = tagBindings;
        return this;
    }
}