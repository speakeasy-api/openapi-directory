package openapisdk.models.operations;



public class GetCustomPagesResponse {
    public String contentType;
    public GetCustomPagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCustomPagesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCustomPagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}