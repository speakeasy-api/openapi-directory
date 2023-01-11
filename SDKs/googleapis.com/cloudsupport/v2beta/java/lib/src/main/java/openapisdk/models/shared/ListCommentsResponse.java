package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListCommentsResponse
 * The response message for the ListComments endpoint.
**/
public class ListCommentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public Comment[] comments;
    public ListCommentsResponse withComments(Comment[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public ListCommentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}