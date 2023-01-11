package openapisdk.models.operations;



public class GetChannelModeratorResponse {
    public String contentType;
    public GetChannelModeratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelModeratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User user;
    public GetChannelModeratorResponse withUser(openapisdk.models.shared.User user) {
        this.user = user;
        return this;
    }
}