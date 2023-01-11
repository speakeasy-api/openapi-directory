package openapisdk.models.operations;



public class DfareportingBillingAssignmentsInsertResponse {
    public openapisdk.models.shared.BillingAssignment billingAssignment;
    public DfareportingBillingAssignmentsInsertResponse withBillingAssignment(openapisdk.models.shared.BillingAssignment billingAssignment) {
        this.billingAssignment = billingAssignment;
        return this;
    }
    public String contentType;
    public DfareportingBillingAssignmentsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DfareportingBillingAssignmentsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}