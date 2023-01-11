package openapisdk.models.operations;



public class CloudbillingProjectsUpdateBillingInfoResponse {
    public String contentType;
    public CloudbillingProjectsUpdateBillingInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ProjectBillingInfo projectBillingInfo;
    public CloudbillingProjectsUpdateBillingInfoResponse withProjectBillingInfo(openapisdk.models.shared.ProjectBillingInfo projectBillingInfo) {
        this.projectBillingInfo = projectBillingInfo;
        return this;
    }
    public Long statusCode;
    public CloudbillingProjectsUpdateBillingInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}