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
    public openapisdk.models.shared.ConversationsV1Role conversationsV1Role;
    public UpdateRoleResponse withConversationsV1Role(openapisdk.models.shared.ConversationsV1Role conversationsV1Role) {
        this.conversationsV1Role = conversationsV1Role;
        return this;
    }
}