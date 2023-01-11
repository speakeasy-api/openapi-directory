package openapisdk.models.operations;



public class CreateServiceRoleResponse {
    public String contentType;
    public CreateServiceRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateServiceRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceRole conversationsV1ServiceServiceRole;
    public CreateServiceRoleResponse withConversationsV1ServiceServiceRole(openapisdk.models.shared.ConversationsV1ServiceServiceRole conversationsV1ServiceServiceRole) {
        this.conversationsV1ServiceServiceRole = conversationsV1ServiceServiceRole;
        return this;
    }
}