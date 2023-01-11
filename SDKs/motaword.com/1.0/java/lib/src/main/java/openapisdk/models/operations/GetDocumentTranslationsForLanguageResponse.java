package openapisdk.models.operations;



public class GetDocumentTranslationsForLanguageResponse {
    public String contentType;
    public GetDocumentTranslationsForLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDocumentTranslationsForLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StringList stringList;
    public GetDocumentTranslationsForLanguageResponse withStringList(openapisdk.models.shared.StringList stringList) {
        this.stringList = stringList;
        return this;
    }
}