package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListTagValuesResponse
 * The ListTagValues response.
**/
public class ListTagValuesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListTagValuesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagValues")
    public TagValue[] tagValues;
    public ListTagValuesResponse withTagValues(TagValue[] tagValues) {
        this.tagValues = tagValues;
        return this;
    }
}