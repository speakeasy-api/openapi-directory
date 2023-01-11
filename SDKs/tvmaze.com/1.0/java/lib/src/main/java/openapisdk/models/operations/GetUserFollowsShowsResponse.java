package openapisdk.models.operations;



public class GetUserFollowsShowsResponse {
    public String contentType;
    public GetUserFollowsShowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShowFollow[] showFollows;
    public GetUserFollowsShowsResponse withShowFollows(openapisdk.models.shared.ShowFollow[] showFollows) {
        this.showFollows = showFollows;
        return this;
    }
    public Long statusCode;
    public GetUserFollowsShowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}