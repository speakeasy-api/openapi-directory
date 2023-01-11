package openapisdk.models.operations;



public class CreateRoleResponse {
    public String contentType;
    public CreateRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ChatV1ServiceRole chatV1ServiceRole;
    public CreateRoleResponse withChatV1ServiceRole(openapisdk.models.shared.ChatV1ServiceRole chatV1ServiceRole) {
        this.chatV1ServiceRole = chatV1ServiceRole;
        return this;
    }
}