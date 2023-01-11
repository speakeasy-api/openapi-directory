package openapisdk.models.operations;



public class IpBlocklistResponse {
    public openapisdk.models.shared.ApiError apiError;
    public IpBlocklistResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public IpBlocklistResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.IpBlocklistResponse ipBlocklistResponse;
    public IpBlocklistResponse withIpBlocklistResponse(openapisdk.models.shared.IpBlocklistResponse ipBlocklistResponse) {
        this.ipBlocklistResponse = ipBlocklistResponse;
        return this;
    }
    public Long statusCode;
    public IpBlocklistResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}