package openapisdk.models.operations;



public class AccessapprovalProjectsApprovalRequestsListRequest {
    public AccessapprovalProjectsApprovalRequestsListPathParams pathParams;
    public AccessapprovalProjectsApprovalRequestsListRequest withPathParams(AccessapprovalProjectsApprovalRequestsListPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccessapprovalProjectsApprovalRequestsListQueryParams queryParams;
    public AccessapprovalProjectsApprovalRequestsListRequest withQueryParams(AccessapprovalProjectsApprovalRequestsListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public AccessapprovalProjectsApprovalRequestsListSecurity security;
    public AccessapprovalProjectsApprovalRequestsListRequest withSecurity(AccessapprovalProjectsApprovalRequestsListSecurity security) {
        this.security = security;
        return this;
    }
}