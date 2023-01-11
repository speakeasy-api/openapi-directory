package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest {
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams pathParams;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest withPathParams(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams queryParams;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest withQueryParams(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GlossaryEntry request;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest withRequest(openapisdk.models.shared.GlossaryEntry request) {
        this.request = request;
        return this;
    }
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity security;
    public TranslateProjectsLocationsGlossariesGlossaryEntriesPatchRequest withSecurity(TranslateProjectsLocationsGlossariesGlossaryEntriesPatchSecurity security) {
        this.security = security;
        return this;
    }
}