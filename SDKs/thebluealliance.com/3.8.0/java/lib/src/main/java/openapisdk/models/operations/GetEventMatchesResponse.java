package openapisdk.models.operations;



public class GetEventMatchesResponse {
    public String contentType;
    public GetEventMatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetEventMatchesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Match[] matches;
    public GetEventMatchesResponse withMatches(openapisdk.models.shared.Match[] matches) {
        this.matches = matches;
        return this;
    }
    public Long statusCode;
    public GetEventMatchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}