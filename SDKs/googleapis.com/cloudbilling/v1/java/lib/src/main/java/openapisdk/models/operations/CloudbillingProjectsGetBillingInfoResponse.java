package openapisdk.models.operations;



public class CloudbillingProjectsGetBillingInfoResponse {
    public String contentType;
    public CloudbillingProjectsGetBillingInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectBillingInfo projectBillingInfo;
    public CloudbillingProjectsGetBillingInfoResponse withProjectBillingInfo(openapisdk.models.shared.ProjectBillingInfo projectBillingInfo) {
        this.projectBillingInfo = projectBillingInfo;
        return this;
    }
    public Long statusCode;
    public CloudbillingProjectsGetBillingInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}