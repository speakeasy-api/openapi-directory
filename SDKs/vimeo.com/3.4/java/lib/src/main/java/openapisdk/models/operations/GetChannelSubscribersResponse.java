package openapisdk.models.operations;



public class GetChannelSubscribersResponse {
    public String contentType;
    public GetChannelSubscribersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetChannelSubscribersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetChannelSubscribersResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetChannelSubscribersResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}