package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsFederationsCreateRequest {
    public MetastoreProjectsLocationsFederationsCreatePathParams pathParams;
    public MetastoreProjectsLocationsFederationsCreateRequest withPathParams(MetastoreProjectsLocationsFederationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public MetastoreProjectsLocationsFederationsCreateQueryParams queryParams;
    public MetastoreProjectsLocationsFederationsCreateRequest withQueryParams(MetastoreProjectsLocationsFederationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.FederationInput request;
    public MetastoreProjectsLocationsFederationsCreateRequest withRequest(openapisdk.models.shared.FederationInput request) {
        this.request = request;
        return this;
    }
    public MetastoreProjectsLocationsFederationsCreateSecurity security;
    public MetastoreProjectsLocationsFederationsCreateRequest withSecurity(MetastoreProjectsLocationsFederationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}