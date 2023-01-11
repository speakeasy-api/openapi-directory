package openapisdk.models.operations;



public class TeamsResponse {
    public String contentType;
    public TeamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] teams;
    public TeamsResponse withTeams(Object[] teams) {
        this.teams = teams;
        return this;
    }
}