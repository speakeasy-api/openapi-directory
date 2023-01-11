package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesSetAcceleratorRequest {
    public NotebooksProjectsLocationsInstancesSetAcceleratorPathParams pathParams;
    public NotebooksProjectsLocationsInstancesSetAcceleratorRequest withPathParams(NotebooksProjectsLocationsInstancesSetAcceleratorPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesSetAcceleratorQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesSetAcceleratorRequest withQueryParams(NotebooksProjectsLocationsInstancesSetAcceleratorQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SetInstanceAcceleratorRequest request;
    public NotebooksProjectsLocationsInstancesSetAcceleratorRequest withRequest(openapisdk.models.shared.SetInstanceAcceleratorRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesSetAcceleratorSecurity security;
    public NotebooksProjectsLocationsInstancesSetAcceleratorRequest withSecurity(NotebooksProjectsLocationsInstancesSetAcceleratorSecurity security) {
        this.security = security;
        return this;
    }
}