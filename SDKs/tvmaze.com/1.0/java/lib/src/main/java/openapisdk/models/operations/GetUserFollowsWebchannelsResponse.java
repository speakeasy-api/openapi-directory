package openapisdk.models.operations;



public class GetUserFollowsWebchannelsResponse {
    public String contentType;
    public GetUserFollowsWebchannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserFollowsWebchannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.WebchannelFollow[] webchannelFollows;
    public GetUserFollowsWebchannelsResponse withWebchannelFollows(openapisdk.models.shared.WebchannelFollow[] webchannelFollows) {
        this.webchannelFollows = webchannelFollows;
        return this;
    }
}