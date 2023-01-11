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
    public openapisdk.models.shared.ChatV2ServiceRole chatV2ServiceRole;
    public FetchRoleResponse withChatV2ServiceRole(openapisdk.models.shared.ChatV2ServiceRole chatV2ServiceRole) {
        this.chatV2ServiceRole = chatV2ServiceRole;
        return this;
    }
}