package openapisdk.models.operations;



public class PutUserFollowsShowsShowIdResponse {
    public String contentType;
    public PutUserFollowsShowsShowIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ShowFollow showFollow;
    public PutUserFollowsShowsShowIdResponse withShowFollow(openapisdk.models.shared.ShowFollow showFollow) {
        this.showFollow = showFollow;
        return this;
    }
    public Long statusCode;
    public PutUserFollowsShowsShowIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}