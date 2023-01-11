package openapisdk.models.operations;



public class AnalyticsManagementClientIdHashClientIdResponse {
    public String contentType;
    public AnalyticsManagementClientIdHashClientIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HashClientIdResponse hashClientIdResponse;
    public AnalyticsManagementClientIdHashClientIdResponse withHashClientIdResponse(openapisdk.models.shared.HashClientIdResponse hashClientIdResponse) {
        this.hashClientIdResponse = hashClientIdResponse;
        return this;
    }
    public Long statusCode;
    public AnalyticsManagementClientIdHashClientIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}