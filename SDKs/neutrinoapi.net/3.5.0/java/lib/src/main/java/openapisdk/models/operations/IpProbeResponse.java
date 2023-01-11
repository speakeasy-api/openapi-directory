package openapisdk.models.operations;



public class IpProbeResponse {
    public openapisdk.models.shared.ApiError apiError;
    public IpProbeResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public IpProbeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpProbeResponse ipProbeResponse;
    public IpProbeResponse withIpProbeResponse(openapisdk.models.shared.IpProbeResponse ipProbeResponse) {
        this.ipProbeResponse = ipProbeResponse;
        return this;
    }
    public Long statusCode;
    public IpProbeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}