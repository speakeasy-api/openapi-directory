package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCreativesResponse
 * A response for listing creatives.
**/
public class ListCreativesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creatives")
    public Creative[] creatives;
    public ListCreativesResponse withCreatives(Creative[] creatives) {
        this.creatives = creatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCreativesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}