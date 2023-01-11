package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TranslateProjectsLocationsDetectLanguageRequest {
    public TranslateProjectsLocationsDetectLanguagePathParams pathParams;
    public TranslateProjectsLocationsDetectLanguageRequest withPathParams(TranslateProjectsLocationsDetectLanguagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TranslateProjectsLocationsDetectLanguageQueryParams queryParams;
    public TranslateProjectsLocationsDetectLanguageRequest withQueryParams(TranslateProjectsLocationsDetectLanguageQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectLanguageRequest request;
    public TranslateProjectsLocationsDetectLanguageRequest withRequest(openapisdk.models.shared.DetectLanguageRequest request) {
        this.request = request;
        return this;
    }
    public TranslateProjectsLocationsDetectLanguageSecurity security;
    public TranslateProjectsLocationsDetectLanguageRequest withSecurity(TranslateProjectsLocationsDetectLanguageSecurity security) {
        this.security = security;
        return this;
    }
}