package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessapprovalProjectsApprovalRequestsApproveRequest {
    public AccessapprovalProjectsApprovalRequestsApprovePathParams pathParams;
    public AccessapprovalProjectsApprovalRequestsApproveRequest withPathParams(AccessapprovalProjectsApprovalRequestsApprovePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccessapprovalProjectsApprovalRequestsApproveQueryParams queryParams;
    public AccessapprovalProjectsApprovalRequestsApproveRequest withQueryParams(AccessapprovalProjectsApprovalRequestsApproveQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApproveApprovalRequestMessage request;
    public AccessapprovalProjectsApprovalRequestsApproveRequest withRequest(openapisdk.models.shared.ApproveApprovalRequestMessage request) {
        this.request = request;
        return this;
    }
    public AccessapprovalProjectsApprovalRequestsApproveSecurity security;
    public AccessapprovalProjectsApprovalRequestsApproveRequest withSecurity(AccessapprovalProjectsApprovalRequestsApproveSecurity security) {
        this.security = security;
        return this;
    }
}