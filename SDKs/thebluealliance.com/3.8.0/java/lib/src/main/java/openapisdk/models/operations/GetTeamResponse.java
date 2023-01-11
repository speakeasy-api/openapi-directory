package openapisdk.models.operations;



public class GetTeamResponse {
    public String contentType;
    public GetTeamResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetTeamResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetTeamResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Team team;
    public GetTeamResponse withTeam(openapisdk.models.shared.Team team) {
        this.team = team;
        return this;
    }
}