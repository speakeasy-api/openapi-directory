package openapisdk.models.operations;



public class GetResourcesLanguagesIdJsonResponse {
    public String contentType;
    public GetResourcesLanguagesIdJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LanguageWrapped[] languageWrappeds;
    public GetResourcesLanguagesIdJsonResponse withLanguageWrappeds(openapisdk.models.shared.LanguageWrapped[] languageWrappeds) {
        this.languageWrappeds = languageWrappeds;
        return this;
    }
    public Long statusCode;
    public GetResourcesLanguagesIdJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}