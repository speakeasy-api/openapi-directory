package openapisdk.models.operations;



public class GetChangelogsResponse {
    public String contentType;
    public GetChangelogsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetChangelogsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetChangelogsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}