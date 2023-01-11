package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RunProjectsLocationsDomainmappingsCreateRequest {
    public RunProjectsLocationsDomainmappingsCreatePathParams pathParams;
    public RunProjectsLocationsDomainmappingsCreateRequest withPathParams(RunProjectsLocationsDomainmappingsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RunProjectsLocationsDomainmappingsCreateQueryParams queryParams;
    public RunProjectsLocationsDomainmappingsCreateRequest withQueryParams(RunProjectsLocationsDomainmappingsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DomainMapping request;
    public RunProjectsLocationsDomainmappingsCreateRequest withRequest(openapisdk.models.shared.DomainMapping request) {
        this.request = request;
        return this;
    }
    public RunProjectsLocationsDomainmappingsCreateSecurity security;
    public RunProjectsLocationsDomainmappingsCreateRequest withSecurity(RunProjectsLocationsDomainmappingsCreateSecurity security) {
        this.security = security;
        return this;
    }
}