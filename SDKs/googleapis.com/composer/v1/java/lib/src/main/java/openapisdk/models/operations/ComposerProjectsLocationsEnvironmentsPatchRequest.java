package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsPatchRequest {
    public ComposerProjectsLocationsEnvironmentsPatchPathParams pathParams;
    public ComposerProjectsLocationsEnvironmentsPatchRequest withPathParams(ComposerProjectsLocationsEnvironmentsPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsPatchQueryParams queryParams;
    public ComposerProjectsLocationsEnvironmentsPatchRequest withQueryParams(ComposerProjectsLocationsEnvironmentsPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnvironmentInput request;
    public ComposerProjectsLocationsEnvironmentsPatchRequest withRequest(openapisdk.models.shared.EnvironmentInput request) {
        this.request = request;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsPatchSecurity security;
    public ComposerProjectsLocationsEnvironmentsPatchRequest withSecurity(ComposerProjectsLocationsEnvironmentsPatchSecurity security) {
        this.security = security;
        return this;
    }
}