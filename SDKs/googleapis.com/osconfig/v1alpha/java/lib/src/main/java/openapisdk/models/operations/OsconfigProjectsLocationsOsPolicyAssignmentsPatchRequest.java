package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest {
    public OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams pathParams;
    public OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest withPathParams(OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams queryParams;
    public OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest withQueryParams(OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OsPolicyAssignmentInput request;
    public OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest withRequest(openapisdk.models.shared.OsPolicyAssignmentInput request) {
        this.request = request;
        return this;
    }
    public OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity security;
    public OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest withSecurity(OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}