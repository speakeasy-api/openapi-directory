package openapisdk.models.operations;



public class IpInfoResponse {
    public openapisdk.models.shared.ApiError apiError;
    public IpInfoResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public IpInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpInfoResponse ipInfoResponse;
    public IpInfoResponse withIpInfoResponse(openapisdk.models.shared.IpInfoResponse ipInfoResponse) {
        this.ipInfoResponse = ipInfoResponse;
        return this;
    }
    public Long statusCode;
    public IpInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}