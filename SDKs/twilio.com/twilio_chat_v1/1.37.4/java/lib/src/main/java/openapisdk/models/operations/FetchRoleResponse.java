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
    public openapisdk.models.shared.ChatV1ServiceRole chatV1ServiceRole;
    public FetchRoleResponse withChatV1ServiceRole(openapisdk.models.shared.ChatV1ServiceRole chatV1ServiceRole) {
        this.chatV1ServiceRole = chatV1ServiceRole;
        return this;
    }
}