package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesRegisterRequest {
    public NotebooksProjectsLocationsInstancesRegisterPathParams pathParams;
    public NotebooksProjectsLocationsInstancesRegisterRequest withPathParams(NotebooksProjectsLocationsInstancesRegisterPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesRegisterQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesRegisterRequest withQueryParams(NotebooksProjectsLocationsInstancesRegisterQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterInstanceRequest request;
    public NotebooksProjectsLocationsInstancesRegisterRequest withRequest(openapisdk.models.shared.RegisterInstanceRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesRegisterSecurity security;
    public NotebooksProjectsLocationsInstancesRegisterRequest withSecurity(NotebooksProjectsLocationsInstancesRegisterSecurity security) {
        this.security = security;
        return this;
    }
}