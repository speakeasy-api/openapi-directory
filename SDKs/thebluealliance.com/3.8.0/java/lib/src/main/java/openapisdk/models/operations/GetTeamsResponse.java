package openapisdk.models.operations;



public class GetTeamsResponse {
    public String contentType;
    public GetTeamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Team[] teams;
    public GetTeamsResponse withTeams(openapisdk.models.shared.Team[] teams) {
        this.teams = teams;
        return this;
    }
}