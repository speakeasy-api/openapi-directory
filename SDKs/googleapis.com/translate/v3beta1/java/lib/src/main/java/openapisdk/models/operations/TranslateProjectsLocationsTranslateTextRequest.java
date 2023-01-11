package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsTranslateTextRequest {
    public TranslateProjectsLocationsTranslateTextPathParams pathParams;
    public TranslateProjectsLocationsTranslateTextRequest withPathParams(TranslateProjectsLocationsTranslateTextPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranslateProjectsLocationsTranslateTextQueryParams queryParams;
    public TranslateProjectsLocationsTranslateTextRequest withQueryParams(TranslateProjectsLocationsTranslateTextQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TranslateTextRequest request;
    public TranslateProjectsLocationsTranslateTextRequest withRequest(openapisdk.models.shared.TranslateTextRequest request) {
        this.request = request;
        return this;
    }
    public TranslateProjectsLocationsTranslateTextSecurity security;
    public TranslateProjectsLocationsTranslateTextRequest withSecurity(TranslateProjectsLocationsTranslateTextSecurity security) {
        this.security = security;
        return this;
    }
}