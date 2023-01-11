package openapisdk.models.operations;



public class DfareportingBillingProfilesUpdateResponse {
    public openapisdk.models.shared.BillingProfile billingProfile;
    public DfareportingBillingProfilesUpdateResponse withBillingProfile(openapisdk.models.shared.BillingProfile billingProfile) {
        this.billingProfile = billingProfile;
        return this;
    }
    public String contentType;
    public DfareportingBillingProfilesUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingBillingProfilesUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}