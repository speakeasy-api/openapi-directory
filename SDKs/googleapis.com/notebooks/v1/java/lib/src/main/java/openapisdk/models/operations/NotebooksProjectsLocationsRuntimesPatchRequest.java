package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesPatchRequest {
    public NotebooksProjectsLocationsRuntimesPatchPathParams pathParams;
    public NotebooksProjectsLocationsRuntimesPatchRequest withPathParams(NotebooksProjectsLocationsRuntimesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesPatchQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesPatchRequest withQueryParams(NotebooksProjectsLocationsRuntimesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RuntimeInput request;
    public NotebooksProjectsLocationsRuntimesPatchRequest withRequest(openapisdk.models.shared.RuntimeInput request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesPatchSecurity security;
    public NotebooksProjectsLocationsRuntimesPatchRequest withSecurity(NotebooksProjectsLocationsRuntimesPatchSecurity security) {
        this.security = security;
        return this;
    }
}