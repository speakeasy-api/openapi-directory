package openapisdk.models.operations;



public class PostServersIdActionsPoweronResponse {
    public PostServersIdActionsPoweronActionResponse actionResponse;
    public PostServersIdActionsPoweronResponse withActionResponse(PostServersIdActionsPoweronActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsPoweronResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsPoweronResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}