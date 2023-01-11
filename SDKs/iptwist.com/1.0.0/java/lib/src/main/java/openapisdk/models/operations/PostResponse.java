package openapisdk.models.operations;



public class PostResponse {
    public String contentType;
    public PostResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Response response;
    public PostResponse withResponse(openapisdk.models.shared.Response response) {
        this.response = response;
        return this;
    }
    public Long statusCode;
    public PostResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}