package openapisdk.models.operations;



public class GetServiceStatusResponse {
    public String contentType;
    public GetServiceStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetServiceStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}