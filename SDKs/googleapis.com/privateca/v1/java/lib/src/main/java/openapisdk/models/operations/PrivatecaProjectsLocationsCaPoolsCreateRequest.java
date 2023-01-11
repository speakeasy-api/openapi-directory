package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PrivatecaProjectsLocationsCaPoolsCreateRequest {
    public PrivatecaProjectsLocationsCaPoolsCreatePathParams pathParams;
    public PrivatecaProjectsLocationsCaPoolsCreateRequest withPathParams(PrivatecaProjectsLocationsCaPoolsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCreateQueryParams queryParams;
    public PrivatecaProjectsLocationsCaPoolsCreateRequest withQueryParams(PrivatecaProjectsLocationsCaPoolsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CaPoolInput request;
    public PrivatecaProjectsLocationsCaPoolsCreateRequest withRequest(openapisdk.models.shared.CaPoolInput request) {
        this.request = request;
        return this;
    }
    public PrivatecaProjectsLocationsCaPoolsCreateSecurity security;
    public PrivatecaProjectsLocationsCaPoolsCreateRequest withSecurity(PrivatecaProjectsLocationsCaPoolsCreateSecurity security) {
        this.security = security;
        return this;
    }
}