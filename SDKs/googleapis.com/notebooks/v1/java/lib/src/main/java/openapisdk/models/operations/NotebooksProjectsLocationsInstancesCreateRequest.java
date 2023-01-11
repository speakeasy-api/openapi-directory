package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesCreateRequest {
    public NotebooksProjectsLocationsInstancesCreatePathParams pathParams;
    public NotebooksProjectsLocationsInstancesCreateRequest withPathParams(NotebooksProjectsLocationsInstancesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesCreateQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesCreateRequest withQueryParams(NotebooksProjectsLocationsInstancesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.InstanceInput request;
    public NotebooksProjectsLocationsInstancesCreateRequest withRequest(openapisdk.models.shared.InstanceInput request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesCreateSecurity security;
    public NotebooksProjectsLocationsInstancesCreateRequest withSecurity(NotebooksProjectsLocationsInstancesCreateSecurity security) {
        this.security = security;
        return this;
    }
}