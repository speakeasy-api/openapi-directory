package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsEnvironmentsCreateRequest {
    public NotebooksProjectsLocationsEnvironmentsCreatePathParams pathParams;
    public NotebooksProjectsLocationsEnvironmentsCreateRequest withPathParams(NotebooksProjectsLocationsEnvironmentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsEnvironmentsCreateQueryParams queryParams;
    public NotebooksProjectsLocationsEnvironmentsCreateRequest withQueryParams(NotebooksProjectsLocationsEnvironmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnvironmentInput request;
    public NotebooksProjectsLocationsEnvironmentsCreateRequest withRequest(openapisdk.models.shared.EnvironmentInput request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsEnvironmentsCreateSecurity security;
    public NotebooksProjectsLocationsEnvironmentsCreateRequest withSecurity(NotebooksProjectsLocationsEnvironmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}