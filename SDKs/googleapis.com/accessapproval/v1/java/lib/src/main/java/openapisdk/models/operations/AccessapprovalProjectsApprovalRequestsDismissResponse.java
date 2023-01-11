package openapisdk.models.operations;



public class AccessapprovalProjectsApprovalRequestsDismissResponse {
    public openapisdk.models.shared.ApprovalRequest approvalRequest;
    public AccessapprovalProjectsApprovalRequestsDismissResponse withApprovalRequest(openapisdk.models.shared.ApprovalRequest approvalRequest) {
        this.approvalRequest = approvalRequest;
        return this;
    }
    public String contentType;
    public AccessapprovalProjectsApprovalRequestsDismissResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccessapprovalProjectsApprovalRequestsDismissResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}