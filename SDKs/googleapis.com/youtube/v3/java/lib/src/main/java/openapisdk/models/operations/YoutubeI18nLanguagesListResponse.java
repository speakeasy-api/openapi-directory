package openapisdk.models.operations;



public class YoutubeI18nLanguagesListResponse {
    public String contentType;
    public YoutubeI18nLanguagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.I18nLanguageListResponse i18nLanguageListResponse;
    public YoutubeI18nLanguagesListResponse withI18nLanguageListResponse(openapisdk.models.shared.I18nLanguageListResponse i18nLanguageListResponse) {
        this.i18nLanguageListResponse = i18nLanguageListResponse;
        return this;
    }
    public Long statusCode;
    public YoutubeI18nLanguagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}