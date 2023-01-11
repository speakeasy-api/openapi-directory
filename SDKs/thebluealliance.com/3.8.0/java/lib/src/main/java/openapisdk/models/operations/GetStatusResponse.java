package openapisdk.models.operations;



public class GetStatusResponse {
    public openapisdk.models.shared.ApiStatus apiStatus;
    public GetStatusResponse withApiStatus(openapisdk.models.shared.ApiStatus apiStatus) {
        this.apiStatus = apiStatus;
        return this;
    }
    public String contentType;
    public GetStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetStatusResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}