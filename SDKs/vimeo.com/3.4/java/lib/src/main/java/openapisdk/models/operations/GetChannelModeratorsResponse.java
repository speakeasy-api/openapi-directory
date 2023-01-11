package openapisdk.models.operations;



public class GetChannelModeratorsResponse {
    public String contentType;
    public GetChannelModeratorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelModeratorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetChannelModeratorsResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}