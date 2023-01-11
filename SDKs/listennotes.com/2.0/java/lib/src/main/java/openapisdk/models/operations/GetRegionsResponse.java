package openapisdk.models.operations;



public class GetRegionsResponse {
    public String contentType;
    public GetRegionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRegionsResponse getRegionsResponse;
    public GetRegionsResponse withGetRegionsResponse(openapisdk.models.shared.GetRegionsResponse getRegionsResponse) {
        this.getRegionsResponse = getRegionsResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRegionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRegionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}