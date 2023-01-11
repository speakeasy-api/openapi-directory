package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppengineProjectsLocationsApplicationsCreateRequest {
    public AppengineProjectsLocationsApplicationsCreatePathParams pathParams;
    public AppengineProjectsLocationsApplicationsCreateRequest withPathParams(AppengineProjectsLocationsApplicationsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AppengineProjectsLocationsApplicationsCreateQueryParams queryParams;
    public AppengineProjectsLocationsApplicationsCreateRequest withQueryParams(AppengineProjectsLocationsApplicationsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationInput request;
    public AppengineProjectsLocationsApplicationsCreateRequest withRequest(openapisdk.models.shared.ApplicationInput request) {
        this.request = request;
        return this;
    }
    public AppengineProjectsLocationsApplicationsCreateSecurity security;
    public AppengineProjectsLocationsApplicationsCreateRequest withSecurity(AppengineProjectsLocationsApplicationsCreateSecurity security) {
        this.security = security;
        return this;
    }
}