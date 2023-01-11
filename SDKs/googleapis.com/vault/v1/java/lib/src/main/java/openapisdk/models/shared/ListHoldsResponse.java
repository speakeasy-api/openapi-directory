package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListHoldsResponse
 * The holds for a matter.
**/
public class ListHoldsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holds")
    public Hold[] holds;
    public ListHoldsResponse withHolds(Hold[] holds) {
        this.holds = holds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListHoldsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}