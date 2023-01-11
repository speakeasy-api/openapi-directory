package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesUpdateConfigRequest {
    public NotebooksProjectsLocationsInstancesUpdateConfigPathParams pathParams;
    public NotebooksProjectsLocationsInstancesUpdateConfigRequest withPathParams(NotebooksProjectsLocationsInstancesUpdateConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesUpdateConfigQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesUpdateConfigRequest withQueryParams(NotebooksProjectsLocationsInstancesUpdateConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateInstanceConfigRequest request;
    public NotebooksProjectsLocationsInstancesUpdateConfigRequest withRequest(openapisdk.models.shared.UpdateInstanceConfigRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesUpdateConfigSecurity security;
    public NotebooksProjectsLocationsInstancesUpdateConfigRequest withSecurity(NotebooksProjectsLocationsInstancesUpdateConfigSecurity security) {
        this.security = security;
        return this;
    }
}