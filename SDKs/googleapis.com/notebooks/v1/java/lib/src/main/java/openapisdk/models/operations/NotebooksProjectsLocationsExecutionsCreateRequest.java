package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsExecutionsCreateRequest {
    public NotebooksProjectsLocationsExecutionsCreatePathParams pathParams;
    public NotebooksProjectsLocationsExecutionsCreateRequest withPathParams(NotebooksProjectsLocationsExecutionsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsExecutionsCreateQueryParams queryParams;
    public NotebooksProjectsLocationsExecutionsCreateRequest withQueryParams(NotebooksProjectsLocationsExecutionsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecutionInput request;
    public NotebooksProjectsLocationsExecutionsCreateRequest withRequest(openapisdk.models.shared.ExecutionInput request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsExecutionsCreateSecurity security;
    public NotebooksProjectsLocationsExecutionsCreateRequest withSecurity(NotebooksProjectsLocationsExecutionsCreateSecurity security) {
        this.security = security;
        return this;
    }
}