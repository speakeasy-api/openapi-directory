package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest {
    public NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigPathParams pathParams;
    public NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest withPathParams(NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest withQueryParams(NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateShieldedInstanceConfigRequest request;
    public NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest withRequest(openapisdk.models.shared.UpdateShieldedInstanceConfigRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity security;
    public NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigRequest withSecurity(NotebooksProjectsLocationsInstancesUpdateShieldedInstanceConfigSecurity security) {
        this.security = security;
        return this;
    }
}