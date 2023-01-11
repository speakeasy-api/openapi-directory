package openapisdk.models.operations;



public class DfareportingBillingProfilesListResponse {
    public openapisdk.models.shared.BillingProfilesListResponse billingProfilesListResponse;
    public DfareportingBillingProfilesListResponse withBillingProfilesListResponse(openapisdk.models.shared.BillingProfilesListResponse billingProfilesListResponse) {
        this.billingProfilesListResponse = billingProfilesListResponse;
        return this;
    }
    public String contentType;
    public DfareportingBillingProfilesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingBillingProfilesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}