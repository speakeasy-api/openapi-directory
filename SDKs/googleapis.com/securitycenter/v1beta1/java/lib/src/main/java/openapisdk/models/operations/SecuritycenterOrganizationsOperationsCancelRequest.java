package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SecuritycenterOrganizationsOperationsCancelRequest {
    public SecuritycenterOrganizationsOperationsCancelPathParams pathParams;
    public SecuritycenterOrganizationsOperationsCancelRequest withPathParams(SecuritycenterOrganizationsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SecuritycenterOrganizationsOperationsCancelQueryParams queryParams;
    public SecuritycenterOrganizationsOperationsCancelRequest withQueryParams(SecuritycenterOrganizationsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public SecuritycenterOrganizationsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public SecuritycenterOrganizationsOperationsCancelSecurity security;
    public SecuritycenterOrganizationsOperationsCancelRequest withSecurity(SecuritycenterOrganizationsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}