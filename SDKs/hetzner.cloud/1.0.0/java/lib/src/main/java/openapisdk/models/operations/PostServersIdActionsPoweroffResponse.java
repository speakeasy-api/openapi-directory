package openapisdk.models.operations;



public class PostServersIdActionsPoweroffResponse {
    public PostServersIdActionsPoweroffActionResponse actionResponse;
    public PostServersIdActionsPoweroffResponse withActionResponse(PostServersIdActionsPoweroffActionResponse actionResponse) {
        this.actionResponse = actionResponse;
        return this;
    }
    public String contentType;
    public PostServersIdActionsPoweroffResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostServersIdActionsPoweroffResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}