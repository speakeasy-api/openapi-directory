package openapisdk.models.operations;



public class AnalyticsProvisioningCreateAccountTreeResponse {
    public openapisdk.models.shared.AccountTreeResponse accountTreeResponse;
    public AnalyticsProvisioningCreateAccountTreeResponse withAccountTreeResponse(openapisdk.models.shared.AccountTreeResponse accountTreeResponse) {
        this.accountTreeResponse = accountTreeResponse;
        return this;
    }
    public String contentType;
    public AnalyticsProvisioningCreateAccountTreeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AnalyticsProvisioningCreateAccountTreeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}