package openapisdk.models.operations;



public class LanguageLanguagesListResponse {
    public String contentType;
    public LanguageLanguagesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LanguagesListResponse languagesListResponse;
    public LanguageLanguagesListResponse withLanguagesListResponse(openapisdk.models.shared.LanguagesListResponse languagesListResponse) {
        this.languagesListResponse = languagesListResponse;
        return this;
    }
    public Long statusCode;
    public LanguageLanguagesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}