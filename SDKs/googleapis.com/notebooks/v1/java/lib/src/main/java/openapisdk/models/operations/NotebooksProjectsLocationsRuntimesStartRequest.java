package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesStartRequest {
    public NotebooksProjectsLocationsRuntimesStartPathParams pathParams;
    public NotebooksProjectsLocationsRuntimesStartRequest withPathParams(NotebooksProjectsLocationsRuntimesStartPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesStartQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesStartRequest withQueryParams(NotebooksProjectsLocationsRuntimesStartQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StartRuntimeRequest request;
    public NotebooksProjectsLocationsRuntimesStartRequest withRequest(openapisdk.models.shared.StartRuntimeRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesStartSecurity security;
    public NotebooksProjectsLocationsRuntimesStartRequest withSecurity(NotebooksProjectsLocationsRuntimesStartSecurity security) {
        this.security = security;
        return this;
    }
}