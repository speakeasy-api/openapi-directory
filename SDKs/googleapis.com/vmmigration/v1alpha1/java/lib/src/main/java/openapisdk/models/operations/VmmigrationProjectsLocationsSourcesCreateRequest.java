package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesCreateRequest {
    public VmmigrationProjectsLocationsSourcesCreatePathParams pathParams;
    public VmmigrationProjectsLocationsSourcesCreateRequest withPathParams(VmmigrationProjectsLocationsSourcesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesCreateQueryParams queryParams;
    public VmmigrationProjectsLocationsSourcesCreateRequest withQueryParams(VmmigrationProjectsLocationsSourcesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SourceInput request;
    public VmmigrationProjectsLocationsSourcesCreateRequest withRequest(openapisdk.models.shared.SourceInput request) {
        this.request = request;
        return this;
    }
    public VmmigrationProjectsLocationsSourcesCreateSecurity security;
    public VmmigrationProjectsLocationsSourcesCreateRequest withSecurity(VmmigrationProjectsLocationsSourcesCreateSecurity security) {
        this.security = security;
        return this;
    }
}