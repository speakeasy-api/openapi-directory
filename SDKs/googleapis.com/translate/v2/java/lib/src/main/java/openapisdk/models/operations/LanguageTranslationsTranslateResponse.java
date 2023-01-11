package openapisdk.models.operations;



public class LanguageTranslationsTranslateResponse {
    public String contentType;
    public LanguageTranslationsTranslateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LanguageTranslationsTranslateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TranslationsListResponse translationsListResponse;
    public LanguageTranslationsTranslateResponse withTranslationsListResponse(openapisdk.models.shared.TranslationsListResponse translationsListResponse) {
        this.translationsListResponse = translationsListResponse;
        return this;
    }
}