package openapisdk.models.operations;



public class GetProjectStringsResponse {
    public String contentType;
    public GetProjectStringsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProjectStringsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StringList stringList;
    public GetProjectStringsResponse withStringList(openapisdk.models.shared.StringList stringList) {
        this.stringList = stringList;
        return this;
    }
}