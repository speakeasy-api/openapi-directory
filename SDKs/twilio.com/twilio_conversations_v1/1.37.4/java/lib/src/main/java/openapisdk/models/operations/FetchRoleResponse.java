package openapisdk.models.operations;



public class FetchRoleResponse {
    public String contentType;
    public FetchRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1Role conversationsV1Role;
    public FetchRoleResponse withConversationsV1Role(openapisdk.models.shared.ConversationsV1Role conversationsV1Role) {
        this.conversationsV1Role = conversationsV1Role;
        return this;
    }
}