package openapisdk.models.operations;



public class PostServersResponse {
    public String contentType;
    public PostServersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public PostServersCreateServerResponse createServerResponse;
    public PostServersResponse withCreateServerResponse(PostServersCreateServerResponse createServerResponse) {
        this.createServerResponse = createServerResponse;
        return this;
    }
    public Long statusCode;
    public PostServersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}