package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsRuntimesUpgradeRequest {
    public NotebooksProjectsLocationsRuntimesUpgradePathParams pathParams;
    public NotebooksProjectsLocationsRuntimesUpgradeRequest withPathParams(NotebooksProjectsLocationsRuntimesUpgradePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesUpgradeQueryParams queryParams;
    public NotebooksProjectsLocationsRuntimesUpgradeRequest withQueryParams(NotebooksProjectsLocationsRuntimesUpgradeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpgradeRuntimeRequest request;
    public NotebooksProjectsLocationsRuntimesUpgradeRequest withRequest(openapisdk.models.shared.UpgradeRuntimeRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsRuntimesUpgradeSecurity security;
    public NotebooksProjectsLocationsRuntimesUpgradeRequest withSecurity(NotebooksProjectsLocationsRuntimesUpgradeSecurity security) {
        this.security = security;
        return this;
    }
}