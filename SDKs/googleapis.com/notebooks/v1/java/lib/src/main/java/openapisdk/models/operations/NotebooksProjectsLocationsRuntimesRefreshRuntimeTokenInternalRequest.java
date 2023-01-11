package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest {
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams pathParams;
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest withPathParams(NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest withQueryParams(NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RefreshRuntimeTokenInternalRequest request;
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest withRequest(openapisdk.models.shared.RefreshRuntimeTokenInternalRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity security;
    public NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalRequest withSecurity(NotebooksProjectsLocationsRuntimesRefreshRuntimeTokenInternalSecurity security) {
        this.security = security;
        return this;
    }
}