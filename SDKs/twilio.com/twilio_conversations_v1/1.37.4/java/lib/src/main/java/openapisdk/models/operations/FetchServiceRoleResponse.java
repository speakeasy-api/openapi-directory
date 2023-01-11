package openapisdk.models.operations;



public class FetchServiceRoleResponse {
    public String contentType;
    public FetchServiceRoleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchServiceRoleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ConversationsV1ServiceServiceRole conversationsV1ServiceServiceRole;
    public FetchServiceRoleResponse withConversationsV1ServiceServiceRole(openapisdk.models.shared.ConversationsV1ServiceServiceRole conversationsV1ServiceServiceRole) {
        this.conversationsV1ServiceServiceRole = conversationsV1ServiceServiceRole;
        return this;
    }
}