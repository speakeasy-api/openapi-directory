package openapisdk.models.operations;



public class PutUserFollowsWebchannelsWebchannelIdResponse {
    public String contentType;
    public PutUserFollowsWebchannelsWebchannelIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutUserFollowsWebchannelsWebchannelIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebchannelFollow webchannelFollow;
    public PutUserFollowsWebchannelsWebchannelIdResponse withWebchannelFollow(openapisdk.models.shared.WebchannelFollow webchannelFollow) {
        this.webchannelFollow = webchannelFollow;
        return this;
    }
}