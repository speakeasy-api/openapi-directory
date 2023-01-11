package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageDetectionsDetectRequest {
    public LanguageDetectionsDetectQueryParams queryParams;
    public LanguageDetectionsDetectRequest withQueryParams(LanguageDetectionsDetectQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DetectLanguageRequest request;
    public LanguageDetectionsDetectRequest withRequest(openapisdk.models.shared.DetectLanguageRequest request) {
        this.request = request;
        return this;
    }
    public LanguageDetectionsDetectSecurity security;
    public LanguageDetectionsDetectRequest withSecurity(LanguageDetectionsDetectSecurity security) {
        this.security = security;
        return this;
    }
}