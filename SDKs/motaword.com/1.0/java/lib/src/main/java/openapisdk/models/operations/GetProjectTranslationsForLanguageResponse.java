package openapisdk.models.operations;



public class GetProjectTranslationsForLanguageResponse {
    public String contentType;
    public GetProjectTranslationsForLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectTranslationsForLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StringList stringList;
    public GetProjectTranslationsForLanguageResponse withStringList(openapisdk.models.shared.StringList stringList) {
        this.stringList = stringList;
        return this;
    }
}