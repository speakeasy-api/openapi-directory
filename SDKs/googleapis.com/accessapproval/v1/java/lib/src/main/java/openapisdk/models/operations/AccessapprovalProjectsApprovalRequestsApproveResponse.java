package openapisdk.models.operations;



public class AccessapprovalProjectsApprovalRequestsApproveResponse {
    public openapisdk.models.shared.ApprovalRequest approvalRequest;
    public AccessapprovalProjectsApprovalRequestsApproveResponse withApprovalRequest(openapisdk.models.shared.ApprovalRequest approvalRequest) {
        this.approvalRequest = approvalRequest;
        return this;
    }
    public String contentType;
    public AccessapprovalProjectsApprovalRequestsApproveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccessapprovalProjectsApprovalRequestsApproveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}