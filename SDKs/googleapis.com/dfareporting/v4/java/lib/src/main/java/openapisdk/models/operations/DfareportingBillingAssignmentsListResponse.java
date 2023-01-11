package openapisdk.models.operations;



public class DfareportingBillingAssignmentsListResponse {
    public openapisdk.models.shared.BillingAssignmentsListResponse billingAssignmentsListResponse;
    public DfareportingBillingAssignmentsListResponse withBillingAssignmentsListResponse(openapisdk.models.shared.BillingAssignmentsListResponse billingAssignmentsListResponse) {
        this.billingAssignmentsListResponse = billingAssignmentsListResponse;
        return this;
    }
    public String contentType;
    public DfareportingBillingAssignmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingBillingAssignmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}