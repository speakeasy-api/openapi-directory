package openapisdk.models.operations;



public class GetTeamMatchesByYearResponse {
    public String contentType;
    public GetTeamMatchesByYearResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamMatchesByYearResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Match[] matches;
    public GetTeamMatchesByYearResponse withMatches(openapisdk.models.shared.Match[] matches) {
        this.matches = matches;
        return this;
    }
    public Long statusCode;
    public GetTeamMatchesByYearResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}