package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsCreateRequest {
    public ComposerProjectsLocationsEnvironmentsCreatePathParams pathParams;
    public ComposerProjectsLocationsEnvironmentsCreateRequest withPathParams(ComposerProjectsLocationsEnvironmentsCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsCreateQueryParams queryParams;
    public ComposerProjectsLocationsEnvironmentsCreateRequest withQueryParams(ComposerProjectsLocationsEnvironmentsCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnvironmentInput request;
    public ComposerProjectsLocationsEnvironmentsCreateRequest withRequest(openapisdk.models.shared.EnvironmentInput request) {
        this.request = request;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsCreateSecurity security;
    public ComposerProjectsLocationsEnvironmentsCreateRequest withSecurity(ComposerProjectsLocationsEnvironmentsCreateSecurity security) {
        this.security = security;
        return this;
    }
}