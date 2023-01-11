package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class LanguageTranslationsTranslateRequest {
    public LanguageTranslationsTranslateQueryParams queryParams;
    public LanguageTranslationsTranslateRequest withQueryParams(LanguageTranslationsTranslateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TranslateTextRequest request;
    public LanguageTranslationsTranslateRequest withRequest(openapisdk.models.shared.TranslateTextRequest request) {
        this.request = request;
        return this;
    }
    public LanguageTranslationsTranslateSecurity security;
    public LanguageTranslationsTranslateRequest withSecurity(LanguageTranslationsTranslateSecurity security) {
        this.security = security;
        return this;
    }
}