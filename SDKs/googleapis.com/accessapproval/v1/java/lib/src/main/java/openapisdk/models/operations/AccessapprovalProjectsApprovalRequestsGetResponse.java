package openapisdk.models.operations;



public class AccessapprovalProjectsApprovalRequestsGetResponse {
    public openapisdk.models.shared.ApprovalRequest approvalRequest;
    public AccessapprovalProjectsApprovalRequestsGetResponse withApprovalRequest(openapisdk.models.shared.ApprovalRequest approvalRequest) {
        this.approvalRequest = approvalRequest;
        return this;
    }
    public String contentType;
    public AccessapprovalProjectsApprovalRequestsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AccessapprovalProjectsApprovalRequestsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}