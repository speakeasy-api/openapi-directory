package openapisdk.models.operations;



public class LanguageTranslationsListResponse {
    public String contentType;
    public LanguageTranslationsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public LanguageTranslationsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TranslationsListResponse translationsListResponse;
    public LanguageTranslationsListResponse withTranslationsListResponse(openapisdk.models.shared.TranslationsListResponse translationsListResponse) {
        this.translationsListResponse = translationsListResponse;
        return this;
    }
}