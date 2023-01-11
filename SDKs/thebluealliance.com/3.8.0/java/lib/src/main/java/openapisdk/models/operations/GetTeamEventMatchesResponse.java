package openapisdk.models.operations;



public class GetTeamEventMatchesResponse {
    public String contentType;
    public GetTeamEventMatchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventMatchesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Match[] matches;
    public GetTeamEventMatchesResponse withMatches(openapisdk.models.shared.Match[] matches) {
        this.matches = matches;
        return this;
    }
    public Long statusCode;
    public GetTeamEventMatchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}