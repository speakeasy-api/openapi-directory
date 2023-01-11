package openapisdk.models.operations;



public class GetGroupMembersResponse {
    public String contentType;
    public GetGroupMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetGroupMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public GetGroupMembersResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.User[] users;
    public GetGroupMembersResponse withUsers(openapisdk.models.shared.User[] users) {
        this.users = users;
        return this;
    }
}