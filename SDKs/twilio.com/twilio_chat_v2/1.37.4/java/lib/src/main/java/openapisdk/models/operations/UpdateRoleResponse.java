package openapisdk.models.operations;



public class UpdateRoleResponse {
    public String contentType;
    public UpdateRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV2ServiceRole chatV2ServiceRole;
    public UpdateRoleResponse withChatV2ServiceRole(openapisdk.models.shared.ChatV2ServiceRole chatV2ServiceRole) {
        this.chatV2ServiceRole = chatV2ServiceRole;
        return this;
    }
}