package openapisdk.models.operations;



public class GetUserFollowsWebchannelsWebchannelIdResponse {
    public String contentType;
    public GetUserFollowsWebchannelsWebchannelIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserFollowsWebchannelsWebchannelIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebchannelFollow webchannelFollow;
    public GetUserFollowsWebchannelsWebchannelIdResponse withWebchannelFollow(openapisdk.models.shared.WebchannelFollow webchannelFollow) {
        this.webchannelFollow = webchannelFollow;
        return this;
    }
}