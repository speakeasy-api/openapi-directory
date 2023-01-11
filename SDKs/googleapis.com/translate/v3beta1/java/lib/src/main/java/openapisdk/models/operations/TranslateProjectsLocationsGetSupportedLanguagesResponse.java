package openapisdk.models.operations;



public class TranslateProjectsLocationsGetSupportedLanguagesResponse {
    public String contentType;
    public TranslateProjectsLocationsGetSupportedLanguagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TranslateProjectsLocationsGetSupportedLanguagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupportedLanguages supportedLanguages;
    public TranslateProjectsLocationsGetSupportedLanguagesResponse withSupportedLanguages(openapisdk.models.shared.SupportedLanguages supportedLanguages) {
        this.supportedLanguages = supportedLanguages;
        return this;
    }
}