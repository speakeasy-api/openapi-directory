package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest {
    public OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams pathParams;
    public OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest withPathParams(OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams queryParams;
    public OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest withQueryParams(OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity security;
    public OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest withSecurity(OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity security) {
        this.security = security;
        return this;
    }
}