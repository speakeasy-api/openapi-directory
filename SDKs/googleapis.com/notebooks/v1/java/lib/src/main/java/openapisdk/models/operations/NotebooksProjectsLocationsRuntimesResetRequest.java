package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesResetRequest {
    public NotebooksProjectsLocationsRuntimesResetPathParams pathParams;
    public NotebooksProjectsLocationsRuntimesResetRequest withPathParams(NotebooksProjectsLocationsRuntimesResetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesResetQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesResetRequest withQueryParams(NotebooksProjectsLocationsRuntimesResetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResetRuntimeRequest request;
    public NotebooksProjectsLocationsRuntimesResetRequest withRequest(openapisdk.models.shared.ResetRuntimeRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesResetSecurity security;
    public NotebooksProjectsLocationsRuntimesResetRequest withSecurity(NotebooksProjectsLocationsRuntimesResetSecurity security) {
        this.security = security;
        return this;
    }
}