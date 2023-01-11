package openapisdk.models.operations;



public class GetLanguagesResponse {
    public String contentType;
    public GetLanguagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Language[] languages;
    public GetLanguagesResponse withLanguages(openapisdk.models.shared.Language[] languages) {
        this.languages = languages;
        return this;
    }
    public Long statusCode;
    public GetLanguagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}