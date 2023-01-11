package openapisdk.models.operations;



public class DfareportingBillingProfilesGetResponse {
    public openapisdk.models.shared.BillingProfile billingProfile;
    public DfareportingBillingProfilesGetResponse withBillingProfile(openapisdk.models.shared.BillingProfile billingProfile) {
        this.billingProfile = billingProfile;
        return this;
    }
    public String contentType;
    public DfareportingBillingProfilesGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingBillingProfilesGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}