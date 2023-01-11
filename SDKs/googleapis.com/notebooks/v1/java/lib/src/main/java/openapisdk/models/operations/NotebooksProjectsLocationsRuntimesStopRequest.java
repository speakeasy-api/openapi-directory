package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesStopRequest {
    public NotebooksProjectsLocationsRuntimesStopPathParams pathParams;
    public NotebooksProjectsLocationsRuntimesStopRequest withPathParams(NotebooksProjectsLocationsRuntimesStopPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesStopQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesStopRequest withQueryParams(NotebooksProjectsLocationsRuntimesStopQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.StopRuntimeRequest request;
    public NotebooksProjectsLocationsRuntimesStopRequest withRequest(openapisdk.models.shared.StopRuntimeRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesStopSecurity security;
    public NotebooksProjectsLocationsRuntimesStopRequest withSecurity(NotebooksProjectsLocationsRuntimesStopSecurity security) {
        this.security = security;
        return this;
    }
}