package openapisdk.models.operations;



public class UserAgentInfoResponse {
    public openapisdk.models.shared.ApiError apiError;
    public UserAgentInfoResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public UserAgentInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserAgentInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UserAgentInfoResponse userAgentInfoResponse;
    public UserAgentInfoResponse withUserAgentInfoResponse(openapisdk.models.shared.UserAgentInfoResponse userAgentInfoResponse) {
        this.userAgentInfoResponse = userAgentInfoResponse;
        return this;
    }
}