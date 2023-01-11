package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AccessapprovalProjectsApprovalRequestsInvalidateRequest {
    public AccessapprovalProjectsApprovalRequestsInvalidatePathParams pathParams;
    public AccessapprovalProjectsApprovalRequestsInvalidateRequest withPathParams(AccessapprovalProjectsApprovalRequestsInvalidatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AccessapprovalProjectsApprovalRequestsInvalidateQueryParams queryParams;
    public AccessapprovalProjectsApprovalRequestsInvalidateRequest withQueryParams(AccessapprovalProjectsApprovalRequestsInvalidateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public AccessapprovalProjectsApprovalRequestsInvalidateRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public AccessapprovalProjectsApprovalRequestsInvalidateSecurity security;
    public AccessapprovalProjectsApprovalRequestsInvalidateRequest withSecurity(AccessapprovalProjectsApprovalRequestsInvalidateSecurity security) {
        this.security = security;
        return this;
    }
}