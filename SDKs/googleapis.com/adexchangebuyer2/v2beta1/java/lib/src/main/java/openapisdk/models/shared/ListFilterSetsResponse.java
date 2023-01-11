package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListFilterSetsResponse
 * Response message for listing filter sets.
**/
public class ListFilterSetsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterSets")
    public FilterSet[] filterSets;
    public ListFilterSetsResponse withFilterSets(FilterSet[] filterSets) {
        this.filterSets = filterSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListFilterSetsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}