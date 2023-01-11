package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLocalPostsResponse
 * Response message for ListLocalPosts
**/
public class ListLocalPostsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("localPosts")
    public LocalPost[] localPosts;
    public ListLocalPostsResponse withLocalPosts(LocalPost[] localPosts) {
        this.localPosts = localPosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListLocalPostsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}