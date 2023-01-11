package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentUserJson200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_timestamp")
    public String apiTimestamp;
    public GetUserContentUserJson200ApplicationJsonResults withApiTimestamp(String apiTimestamp) {
        this.apiTimestamp = apiTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public GetUserContentUserJson200ApplicationJsonResultsComments[] comments;
    public GetUserContentUserJson200ApplicationJsonResults withComments(GetUserContentUserJson200ApplicationJsonResultsComments[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCommentsFound")
    public Long totalCommentsFound;
    public GetUserContentUserJson200ApplicationJsonResults withTotalCommentsFound(Long totalCommentsFound) {
        this.totalCommentsFound = totalCommentsFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCommentsReturned")
    public Long totalCommentsReturned;
    public GetUserContentUserJson200ApplicationJsonResults withTotalCommentsReturned(Long totalCommentsReturned) {
        this.totalCommentsReturned = totalCommentsReturned;
        return this;
    }
}