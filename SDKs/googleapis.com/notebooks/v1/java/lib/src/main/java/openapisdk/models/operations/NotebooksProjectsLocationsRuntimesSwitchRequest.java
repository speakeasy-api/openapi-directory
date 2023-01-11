package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesSwitchRequest {
    public NotebooksProjectsLocationsRuntimesSwitchPathParams pathParams;
    public NotebooksProjectsLocationsRuntimesSwitchRequest withPathParams(NotebooksProjectsLocationsRuntimesSwitchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesSwitchQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesSwitchRequest withQueryParams(NotebooksProjectsLocationsRuntimesSwitchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SwitchRuntimeRequest request;
    public NotebooksProjectsLocationsRuntimesSwitchRequest withRequest(openapisdk.models.shared.SwitchRuntimeRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesSwitchSecurity security;
    public NotebooksProjectsLocationsRuntimesSwitchRequest withSecurity(NotebooksProjectsLocationsRuntimesSwitchSecurity security) {
        this.security = security;
        return this;
    }
}