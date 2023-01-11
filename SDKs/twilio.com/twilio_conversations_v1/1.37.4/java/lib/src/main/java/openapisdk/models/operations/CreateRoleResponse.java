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
    public openapisdk.models.shared.ConversationsV1Role conversationsV1Role;
    public CreateRoleResponse withConversationsV1Role(openapisdk.models.shared.ConversationsV1Role conversationsV1Role) {
        this.conversationsV1Role = conversationsV1Role;
        return this;
    }
}