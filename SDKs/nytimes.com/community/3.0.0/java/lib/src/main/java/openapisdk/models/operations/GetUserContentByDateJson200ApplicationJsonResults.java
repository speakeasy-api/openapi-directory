package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetUserContentByDateJson200ApplicationJsonResults {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("api_timestamp")
    public String apiTimestamp;
    public GetUserContentByDateJson200ApplicationJsonResults withApiTimestamp(String apiTimestamp) {
        this.apiTimestamp = apiTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public GetUserContentByDateJson200ApplicationJsonResultsComments[] comments;
    public GetUserContentByDateJson200ApplicationJsonResults withComments(GetUserContentByDateJson200ApplicationJsonResultsComments[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCommentsFound")
    public Long totalCommentsFound;
    public GetUserContentByDateJson200ApplicationJsonResults withTotalCommentsFound(Long totalCommentsFound) {
        this.totalCommentsFound = totalCommentsFound;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalCommentsReturned")
    public Long totalCommentsReturned;
    public GetUserContentByDateJson200ApplicationJsonResults withTotalCommentsReturned(Long totalCommentsReturned) {
        this.totalCommentsReturned = totalCommentsReturned;
        return this;
    }
}