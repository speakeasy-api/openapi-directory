package openapisdk.models.operations;



public class GetMatchSimpleResponse {
    public String contentType;
    public GetMatchSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMatchSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.MatchSimple matchSimple;
    public GetMatchSimpleResponse withMatchSimple(openapisdk.models.shared.MatchSimple matchSimple) {
        this.matchSimple = matchSimple;
        return this;
    }
    public Long statusCode;
    public GetMatchSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}