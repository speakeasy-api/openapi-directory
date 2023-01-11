package openapisdk.models.operations;



public class TeamsActiveResponse {
    public String contentType;
    public TeamsActiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsActiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] teams;
    public TeamsActiveResponse withTeams(Object[] teams) {
        this.teams = teams;
        return this;
    }
}