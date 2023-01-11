package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesCreateRequest {
    public NotebooksProjectsLocationsRuntimesCreatePathParams pathParams;
    public NotebooksProjectsLocationsRuntimesCreateRequest withPathParams(NotebooksProjectsLocationsRuntimesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesCreateQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesCreateRequest withQueryParams(NotebooksProjectsLocationsRuntimesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RuntimeInput request;
    public NotebooksProjectsLocationsRuntimesCreateRequest withRequest(openapisdk.models.shared.RuntimeInput request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesCreateSecurity security;
    public NotebooksProjectsLocationsRuntimesCreateRequest withSecurity(NotebooksProjectsLocationsRuntimesCreateSecurity security) {
        this.security = security;
        return this;
    }
}