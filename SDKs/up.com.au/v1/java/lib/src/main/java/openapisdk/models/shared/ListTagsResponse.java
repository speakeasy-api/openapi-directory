package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ListTagsResponse
 * Successful response to get all tags. This returns a paginated list of
 * tags, which can be scrolled by following the `prev` and `next` links if
 * present.
 * 
**/
public class ListTagsResponse {
    @JsonProperty("data")
    public TagResource[] data;
    public ListTagsResponse withData(TagResource[] data) {
        this.data = data;
        return this;
    }
    @JsonProperty("links")
    public ListTagsResponseLinks links;
    public ListTagsResponse withLinks(ListTagsResponseLinks links) {
        this.links = links;
        return this;
    }
}