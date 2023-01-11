package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ComposerProjectsLocationsEnvironmentsRestartWebServerRequest {
    public ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams pathParams;
    public ComposerProjectsLocationsEnvironmentsRestartWebServerRequest withPathParams(ComposerProjectsLocationsEnvironmentsRestartWebServerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams queryParams;
    public ComposerProjectsLocationsEnvironmentsRestartWebServerRequest withQueryParams(ComposerProjectsLocationsEnvironmentsRestartWebServerQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public ComposerProjectsLocationsEnvironmentsRestartWebServerRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
    public ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity security;
    public ComposerProjectsLocationsEnvironmentsRestartWebServerRequest withSecurity(ComposerProjectsLocationsEnvironmentsRestartWebServerSecurity security) {
        this.security = security;
        return this;
    }
}