package openapisdk.models.operations;



public class GetMatchResponse {
    public String contentType;
    public GetMatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetMatchResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Match match;
    public GetMatchResponse withMatch(openapisdk.models.shared.Match match) {
        this.match = match;
        return this;
    }
    public Long statusCode;
    public GetMatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}