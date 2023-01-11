package openapisdk.models.operations;



public class GetEventMatchesSimpleResponse {
    public String contentType;
    public GetEventMatchesSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventMatchesSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.MatchSimple[] matchSimples;
    public GetEventMatchesSimpleResponse withMatchSimples(openapisdk.models.shared.MatchSimple[] matchSimples) {
        this.matchSimples = matchSimples;
        return this;
    }
    public Long statusCode;
    public GetEventMatchesSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}