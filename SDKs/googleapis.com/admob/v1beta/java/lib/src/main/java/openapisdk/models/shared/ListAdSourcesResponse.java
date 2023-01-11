package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAdSourcesResponse
 * Response for the ListAdSourcesRequest.
**/
public class ListAdSourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adSources")
    public AdSource[] adSources;
    public ListAdSourcesResponse withAdSources(AdSource[] adSources) {
        this.adSources = adSources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListAdSourcesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}