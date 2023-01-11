package openapisdk.models.operations;



public class TypeaheadResponse {
    public String contentType;
    public TypeaheadResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public TypeaheadResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public TypeaheadResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TypeaheadResponse typeaheadResponse;
    public TypeaheadResponse withTypeaheadResponse(openapisdk.models.shared.TypeaheadResponse typeaheadResponse) {
        this.typeaheadResponse = typeaheadResponse;
        return this;
    }
}