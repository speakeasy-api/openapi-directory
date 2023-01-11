package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest {
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams pathParams;
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest withPathParams(IamProjectsLocationsWorkloadIdentityPoolsProvidersCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams queryParams;
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest withQueryParams(IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.WorkloadIdentityPoolProviderInput request;
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest withRequest(openapisdk.models.shared.WorkloadIdentityPoolProviderInput request) {
        this.request = request;
        return this;
    }
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity security;
    public IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateRequest withSecurity(IamProjectsLocationsWorkloadIdentityPoolsProvidersCreateSecurity security) {
        this.security = security;
        return this;
    }
}