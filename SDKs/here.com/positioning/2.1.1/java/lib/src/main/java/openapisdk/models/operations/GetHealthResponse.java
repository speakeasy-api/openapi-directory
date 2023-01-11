package openapisdk.models.operations;



public class GetHealthResponse {
    public openapisdk.models.shared.ApiHealthStatus apiHealthStatus;
    public GetHealthResponse withApiHealthStatus(openapisdk.models.shared.ApiHealthStatus apiHealthStatus) {
        this.apiHealthStatus = apiHealthStatus;
        return this;
    }
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