package openapisdk.models.operations;



public class GetDocumentTranslationsResponse {
    public String contentType;
    public GetDocumentTranslationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetDocumentTranslationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StringList stringList;
    public GetDocumentTranslationsResponse withStringList(openapisdk.models.shared.StringList stringList) {
        this.stringList = stringList;
        return this;
    }
}