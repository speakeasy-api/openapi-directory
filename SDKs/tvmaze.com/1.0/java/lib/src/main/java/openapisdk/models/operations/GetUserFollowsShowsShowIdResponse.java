package openapisdk.models.operations;



public class GetUserFollowsShowsShowIdResponse {
    public String contentType;
    public GetUserFollowsShowsShowIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShowFollow showFollow;
    public GetUserFollowsShowsShowIdResponse withShowFollow(openapisdk.models.shared.ShowFollow showFollow) {
        this.showFollow = showFollow;
        return this;
    }
    public Long statusCode;
    public GetUserFollowsShowsShowIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}