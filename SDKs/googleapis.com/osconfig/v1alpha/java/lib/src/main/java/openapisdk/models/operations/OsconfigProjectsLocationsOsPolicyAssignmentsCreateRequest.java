package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest {
    public OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams pathParams;
    public OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest withPathParams(OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams queryParams;
    public OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest withQueryParams(OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OsPolicyAssignmentInput request;
    public OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest withRequest(openapisdk.models.shared.OsPolicyAssignmentInput request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity security;
    public OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest withSecurity(OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}