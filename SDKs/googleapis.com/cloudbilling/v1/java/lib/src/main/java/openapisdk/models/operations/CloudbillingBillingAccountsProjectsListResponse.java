package openapisdk.models.operations;



public class CloudbillingBillingAccountsProjectsListResponse {
    public String contentType;
    public CloudbillingBillingAccountsProjectsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListProjectBillingInfoResponse listProjectBillingInfoResponse;
    public CloudbillingBillingAccountsProjectsListResponse withListProjectBillingInfoResponse(openapisdk.models.shared.ListProjectBillingInfoResponse listProjectBillingInfoResponse) {
        this.listProjectBillingInfoResponse = listProjectBillingInfoResponse;
        return this;
    }
    public Long statusCode;
    public CloudbillingBillingAccountsProjectsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}