package openapisdk.models.operations;



public class GetResourcesLanguagesJsonResponse {
    public String contentType;
    public GetResourcesLanguagesJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LanguageWrapped[] languageWrappeds;
    public GetResourcesLanguagesJsonResponse withLanguageWrappeds(openapisdk.models.shared.LanguageWrapped[] languageWrappeds) {
        this.languageWrappeds = languageWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesLanguagesJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}