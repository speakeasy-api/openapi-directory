package openapisdk.models.operations;



public class GetTeamEventMatchesSimpleResponse {
    public String contentType;
    public GetTeamEventMatchesSimpleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamEventMatchesSimpleResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.Match[] matches;
    public GetTeamEventMatchesSimpleResponse withMatches(openapisdk.models.shared.Match[] matches) {
        this.matches = matches;
        return this;
    }
    public Long statusCode;
    public GetTeamEventMatchesSimpleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}