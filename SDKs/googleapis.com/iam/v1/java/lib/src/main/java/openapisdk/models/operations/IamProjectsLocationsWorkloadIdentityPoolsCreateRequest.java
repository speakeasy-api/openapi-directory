package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsLocationsWorkloadIdentityPoolsCreateRequest {
    public IamProjectsLocationsWorkloadIdentityPoolsCreatePathParams pathParams;
    public IamProjectsLocationsWorkloadIdentityPoolsCreateRequest withPathParams(IamProjectsLocationsWorkloadIdentityPoolsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsLocationsWorkloadIdentityPoolsCreateQueryParams queryParams;
    public IamProjectsLocationsWorkloadIdentityPoolsCreateRequest withQueryParams(IamProjectsLocationsWorkloadIdentityPoolsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkloadIdentityPoolInput request;
    public IamProjectsLocationsWorkloadIdentityPoolsCreateRequest withRequest(openapisdk.models.shared.WorkloadIdentityPoolInput request) {
        this.request = request;
        return this;
    }
    public IamProjectsLocationsWorkloadIdentityPoolsCreateSecurity security;
    public IamProjectsLocationsWorkloadIdentityPoolsCreateRequest withSecurity(IamProjectsLocationsWorkloadIdentityPoolsCreateSecurity security) {
        this.security = security;
        return this;
    }
}