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
    public openapisdk.models.shared.ChatV1ServiceRole chatV1ServiceRole;
    public UpdateRoleResponse withChatV1ServiceRole(openapisdk.models.shared.ChatV1ServiceRole chatV1ServiceRole) {
        this.chatV1ServiceRole = chatV1ServiceRole;
        return this;
    }
}