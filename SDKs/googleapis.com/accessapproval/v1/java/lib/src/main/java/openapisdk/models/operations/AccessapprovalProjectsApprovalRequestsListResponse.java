package openapisdk.models.operations;



public class AccessapprovalProjectsApprovalRequestsListResponse {
    public String contentType;
    public AccessapprovalProjectsApprovalRequestsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListApprovalRequestsResponse listApprovalRequestsResponse;
    public AccessapprovalProjectsApprovalRequestsListResponse withListApprovalRequestsResponse(openapisdk.models.shared.ListApprovalRequestsResponse listApprovalRequestsResponse) {
        this.listApprovalRequestsResponse = listApprovalRequestsResponse;
        return this;
    }
    public Long statusCode;
    public AccessapprovalProjectsApprovalRequestsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}