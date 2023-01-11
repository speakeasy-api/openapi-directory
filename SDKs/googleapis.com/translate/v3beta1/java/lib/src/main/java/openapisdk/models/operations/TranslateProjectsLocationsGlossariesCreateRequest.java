package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsGlossariesCreateRequest {
    public TranslateProjectsLocationsGlossariesCreatePathParams pathParams;
    public TranslateProjectsLocationsGlossariesCreateRequest withPathParams(TranslateProjectsLocationsGlossariesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranslateProjectsLocationsGlossariesCreateQueryParams queryParams;
    public TranslateProjectsLocationsGlossariesCreateRequest withQueryParams(TranslateProjectsLocationsGlossariesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GlossaryInput request;
    public TranslateProjectsLocationsGlossariesCreateRequest withRequest(openapisdk.models.shared.GlossaryInput request) {
        this.request = request;
        return this;
    }
    public TranslateProjectsLocationsGlossariesCreateSecurity security;
    public TranslateProjectsLocationsGlossariesCreateRequest withSecurity(TranslateProjectsLocationsGlossariesCreateSecurity security) {
        this.security = security;
        return this;
    }
}