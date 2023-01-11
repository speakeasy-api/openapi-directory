package openapisdk.models.operations;



public class PostServersIdActionsChangeAliasIpsResponse {
    public PostServersIdActionsChangeAliasIpsActionResponse actionResponse;
    public PostServersIdActionsChangeAliasIpsResponse withActionResponse(PostServersIdActionsChangeAliasIpsActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsChangeAliasIpsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsChangeAliasIpsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}