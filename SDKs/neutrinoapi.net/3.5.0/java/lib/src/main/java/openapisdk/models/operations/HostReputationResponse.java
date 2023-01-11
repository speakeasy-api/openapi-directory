package openapisdk.models.operations;



public class HostReputationResponse {
    public openapisdk.models.shared.ApiError apiError;
    public HostReputationResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public HostReputationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HostReputationResponse hostReputationResponse;
    public HostReputationResponse withHostReputationResponse(openapisdk.models.shared.HostReputationResponse hostReputationResponse) {
        this.hostReputationResponse = hostReputationResponse;
        return this;
    }
    public Long statusCode;
    public HostReputationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}