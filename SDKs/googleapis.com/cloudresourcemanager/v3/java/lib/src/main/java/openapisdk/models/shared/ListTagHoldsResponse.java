package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagHoldsResponse
 * The ListTagHolds response.
**/
public class ListTagHoldsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTagHoldsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagHolds")
    public TagHold[] tagHolds;
    public ListTagHoldsResponse withTagHolds(TagHold[] tagHolds) {
        this.tagHolds = tagHolds;
        return this;
    }
}