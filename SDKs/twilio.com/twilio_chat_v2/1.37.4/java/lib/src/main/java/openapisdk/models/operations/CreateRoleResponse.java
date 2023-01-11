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
    public openapisdk.models.shared.ChatV2ServiceRole chatV2ServiceRole;
    public CreateRoleResponse withChatV2ServiceRole(openapisdk.models.shared.ChatV2ServiceRole chatV2ServiceRole) {
        this.chatV2ServiceRole = chatV2ServiceRole;
        return this;
    }
}