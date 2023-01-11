package openapisdk.models.operations;



public class GetProjectStringsForLanguageResponse {
    public String contentType;
    public GetProjectStringsForLanguageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectStringsForLanguageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StringList stringList;
    public GetProjectStringsForLanguageResponse withStringList(openapisdk.models.shared.StringList stringList) {
        this.stringList = stringList;
        return this;
    }
}