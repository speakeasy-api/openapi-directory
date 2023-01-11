package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest {
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams pathParams;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest withPathParams(TranslateProjectsLocationsGlossariesGlossaryEntriesCreatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams queryParams;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest withQueryParams(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GlossaryEntry request;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest withRequest(openapisdk.models.shared.GlossaryEntry request) {
        this.request = request;
        return this;
    }
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity security;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesCreateRequest withSecurity(TranslateProjectsLocationsGlossariesGlossaryEntriesCreateSecurity security) {
        this.security = security;
        return this;
    }
}