package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListSpokesResponse
 * The response for HubService.ListSpokes.
**/
public class ListSpokesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListSpokesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spokes")
    public Spoke[] spokes;
    public ListSpokesResponse withSpokes(Spoke[] spokes) {
        this.spokes = spokes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unreachable")
    public String[] unreachable;
    public ListSpokesResponse withUnreachable(String[] unreachable) {
        this.unreachable = unreachable;
        return this;
    }
}