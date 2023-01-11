package openapisdk.models.operations;



public class GetHealthResponse {
    public String contentType;
    public GetHealthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetHealthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}