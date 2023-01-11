package openapisdk.models.operations;



public class TeamsAllResponse {
    public String contentType;
    public TeamsAllResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsAllResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] teams;
    public TeamsAllResponse withTeams(Object[] teams) {
        this.teams = teams;
        return this;
    }
}