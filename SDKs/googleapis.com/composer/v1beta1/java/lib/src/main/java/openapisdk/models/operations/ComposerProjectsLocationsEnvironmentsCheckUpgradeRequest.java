package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest {
    public ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams pathParams;
    public ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest withPathParams(ComposerProjectsLocationsEnvironmentsCheckUpgradePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams queryParams;
    public ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest withQueryParams(ComposerProjectsLocationsEnvironmentsCheckUpgradeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CheckUpgradeRequest request;
    public ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest withRequest(openapisdk.models.shared.CheckUpgradeRequest request) {
        this.request = request;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity security;
    public ComposerProjectsLocationsEnvironmentsCheckUpgradeRequest withSecurity(ComposerProjectsLocationsEnvironmentsCheckUpgradeSecurity security) {
        this.security = security;
        return this;
    }
}