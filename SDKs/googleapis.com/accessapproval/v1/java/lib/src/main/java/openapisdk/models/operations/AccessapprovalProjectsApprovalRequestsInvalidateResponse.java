package openapisdk.models.operations;



public class AccessapprovalProjectsApprovalRequestsInvalidateResponse {
    public openapisdk.models.shared.ApprovalRequest approvalRequest;
    public AccessapprovalProjectsApprovalRequestsInvalidateResponse withApprovalRequest(openapisdk.models.shared.ApprovalRequest approvalRequest) {
        this.approvalRequest = approvalRequest;
        return this;
    }
    public String contentType;
    public AccessapprovalProjectsApprovalRequestsInvalidateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccessapprovalProjectsApprovalRequestsInvalidateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}