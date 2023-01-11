package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class NotebooksProjectsLocationsInstancesUpgradeInternalRequest {
    public NotebooksProjectsLocationsInstancesUpgradeInternalPathParams pathParams;
    public NotebooksProjectsLocationsInstancesUpgradeInternalRequest withPathParams(NotebooksProjectsLocationsInstancesUpgradeInternalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public NotebooksProjectsLocationsInstancesUpgradeInternalQueryParams queryParams;
    public NotebooksProjectsLocationsInstancesUpgradeInternalRequest withQueryParams(NotebooksProjectsLocationsInstancesUpgradeInternalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpgradeInstanceInternalRequest request;
    public NotebooksProjectsLocationsInstancesUpgradeInternalRequest withRequest(openapisdk.models.shared.UpgradeInstanceInternalRequest request) {
        this.request = request;
        return this;
    }
    public NotebooksProjectsLocationsInstancesUpgradeInternalSecurity security;
    public NotebooksProjectsLocationsInstancesUpgradeInternalRequest withSecurity(NotebooksProjectsLocationsInstancesUpgradeInternalSecurity security) {
        this.security = security;
        return this;
    }
}