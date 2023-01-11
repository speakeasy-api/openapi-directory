package openapisdk.models.operations;



public class TeamsBySeasonResponse {
    public String contentType;
    public TeamsBySeasonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TeamsBySeasonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object[] teams;
    public TeamsBySeasonResponse withTeams(Object[] teams) {
        this.teams = teams;
        return this;
    }
}